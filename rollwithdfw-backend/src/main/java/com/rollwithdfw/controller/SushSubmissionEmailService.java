package com.rollwithdfw.controller;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.MailParseException;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import com.rollwithdfw.dto.SubmissionRequest;

import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class SushSubmissionEmailService {

    private final JavaMailSender mailSender;

    // ideally from env var
    @Value("${submission.recipient.email}")
    private String notificationToAddress;

    @Value("${spring.mail.username}")
    private String fromAddress; // same as SMTP username

    public void sendSubmissionEmail(SubmissionRequest request) {
        MimeMessage message = mailSender.createMimeMessage();

        try {
            MimeMessageHelper helper = new MimeMessageHelper(message, true, "UTF-8");

            // Use your own valid addresses
            helper.setFrom(fromAddress);
            helper.setTo(notificationToAddress);

            // Let you hit "Reply" to answer the user
            if (request.getEmail() != null && !request.getEmail().isBlank()) {
                helper.setReplyTo(request.getEmail().trim());
            }

            helper.setSubject("New sushi nomination from " + safe(request.getArea()));

            String body = """
                    New sushi nomination submitted:

                    Restaurant: %s
                    Area: %s
                    Email: %s
                    Message:
                    %s
                    """.formatted(
                    safe(request.getResturant()),
                    safe(request.getArea()),
                    safe(request.getEmail()),
                    safe(request.getDetails()));

            helper.setText(body, false);

            mailSender.send(message);
        } catch (MessagingException e) {
            // Let Spring wrap it, but log the real cause
            throw new MailParseException("Failed to construct nomination email", e);
        }
    }

    private String safe(String s) {
        return s == null ? "" : s;
    }
}
