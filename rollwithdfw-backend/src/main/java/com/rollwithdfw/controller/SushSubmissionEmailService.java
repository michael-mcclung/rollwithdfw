package com.rollwithdfw.controller;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import com.rollwithdfw.dto.SubmissionRequest;

@Service
public class SushSubmissionEmailService {

    private final JavaMailSender mailSender;

    public SushSubmissionEmailService(JavaMailSender mailSender) {
        this.mailSender = mailSender;
    }

    /**
     *
     */
    @Value("${submission.recipient.email}")
    private String recipientEmail;

    public void sendSubmissionEmail(SubmissionRequest submissionRequest) {

        // Implementation for sending email using mailSender
        // Construct email content and send it to recipientEmail
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(recipientEmail);
        message.setSubject("New contact from " + submissionRequest.getName());
        message.setText(recipientEmail + "\n\n" +
                "Name: " + submissionRequest.getName() + "\n" +
                "Email: " + submissionRequest.getEmail() + "\n" +
                "Phone: " + submissionRequest.getDetails());
        mailSender.send(message);
    }
}
