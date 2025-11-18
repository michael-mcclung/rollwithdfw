package com.rollwithdfw.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rollwithdfw.dto.SubmissionRequest;

@RestController
@RequestMapping("/api/submissions")
@CrossOrigin(origins = "http://rollwithdfw.netlify.app")
public class SushiSubmissionController {

    private final SushSubmissionEmailService emailService;

    public SushiSubmissionController(SushSubmissionEmailService emailService) {
        this.emailService = emailService;
    }

    @PostMapping("/sushi")
    public ResponseEntity<Void> handleSubmission(@RequestBody SubmissionRequest submissionRequest) {
        emailService.sendSubmissionEmail(submissionRequest);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PostMapping("/sushi/nominations")
    public ResponseEntity<Void> createNomination(@RequestBody SubmissionRequest request) {

        // TODO: Save to DB or send email notification
        // Example: log for now
        System.out.println("New nomination:");
        System.out.println("Restaurant: " + request.getResturant());
        System.out.println("Area: " + request.getArea());
        System.out.println("Email: " + request.getEmail());
        System.out.println("Message: " + request.getDetails());

        return ResponseEntity.ok().build();
    }

}
