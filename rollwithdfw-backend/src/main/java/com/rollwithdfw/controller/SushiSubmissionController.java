package com.rollwithdfw.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rollwithdfw.dto.SubmissionRequest;

@RestController
@RequestMapping("/api/v1/")
@CrossOrigin(origins = "https://www.rollwithdfw.com")
public class SushiSubmissionController {

    private final SushSubmissionEmailService emailService;

    public SushiSubmissionController(SushSubmissionEmailService emailService) {
        this.emailService = emailService;
    }

    @PostMapping("/submissions")
    public ResponseEntity<Void> handleSubmission(@RequestBody SubmissionRequest submissionRequest) {

        emailService.sendSubmissionEmail(submissionRequest);

        System.out.println("New nomination:");
        System.out.println("Restaurant: " + submissionRequest.getResturant());
        System.out.println("Area: " + submissionRequest.getArea());
        System.out.println("Email: " + submissionRequest.getEmail());
        System.out.println("Message: " + submissionRequest.getDetails());
        return ResponseEntity.ok().build();
    }
}
