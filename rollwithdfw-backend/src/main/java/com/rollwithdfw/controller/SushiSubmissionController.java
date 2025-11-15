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
@RequestMapping("/api/submissions/sushi")
@CrossOrigin(origins = "http://rollwithdfw.netlify.app")
public class SushiSubmissionController {

    private final SushSubmissionEmailService emailService;

    public SushiSubmissionController(SushSubmissionEmailService emailService) {
        this.emailService = emailService;
    }

    @PostMapping
    public ResponseEntity<Void> handleSubmission(@RequestBody SubmissionRequest submissionRequest) {
        emailService.sendSubmissionEmail(submissionRequest);
        return new ResponseEntity<>(HttpStatus.OK);
    }

}
