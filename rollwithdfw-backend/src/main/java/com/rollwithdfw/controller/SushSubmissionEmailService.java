package com.rollwithdfw.controller;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import com.rollwithdfw.dto.SubmissionRequest;

@Service
public class SushSubmissionEmailService {

    @Value("${submission.recipient.email:}")
    private String recipientEmail;

    private final JavaMailSender mailSender;

    public SushSubmissionEmailService(JavaMailSender mailSender) {
        this.mailSender = mailSender;
    }

    public void sendSubmissionEmail(SubmissionRequest submissionRequest) {

        // Implementation for sending email using mailSender
        // Construct email content and send it to recipientEmail
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(recipientEmail);
        message.setSubject("New contact from " + submissionRequest.getEmail());
        message.setText(recipientEmail + "\n\n" +
                "Resturant: " + submissionRequest.getResturant() + "\n" +
                "Area: " + submissionRequest.getArea() + "\n" +
                "Email: " + submissionRequest.getEmail() + "\n" +
                "Message: " + submissionRequest.getDetails());
        mailSender.send(message);

        if (recipientEmail == null || recipientEmail.isBlank()) {
            System.out.println("No submission.recipient.email configured; skipping email send");
            return;
        }

    }
}
