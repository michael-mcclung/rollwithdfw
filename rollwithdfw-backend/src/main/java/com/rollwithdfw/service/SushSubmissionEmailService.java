package com.rollwithdfw.service;

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

    public void sendSubmissionEmail(SubmissionRequest request) {
        try {
            MimeMessage message = mailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(message, true, "UTF-8");

            // Use your own valid addresses
            // same used so email is sent to self
            helper.setFrom(notificationToAddress);
            helper.setTo(notificationToAddress);

            // Let you hit "Reply" to answer the user
            if (request.getEmail() != null && !request.getEmail().isBlank()) {
                helper.setReplyTo(request.getEmail().trim());
            }

            helper.setSubject(
                    "New sushi nomination from " +
                            safe(request.getResturant()) +
                            safe(request.getArea()));

            String body = """
                    New sushi nomination submitted:

                    Full Name: %s
                    Restaurant: %s
                    Area: %s
                    Email: %s
                    Message: %s
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
        return s == null ? "" : s.trim();
    }

}
