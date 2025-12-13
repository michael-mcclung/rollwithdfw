package com.rollwithdfw.controller;

import org.springframework.http.ResponseEntity;
// import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rollwithdfw.dto.SubmissionRequest;
import com.rollwithdfw.service.SushSubmissionEmailService;

@RestController
@RequestMapping("/api/v1/")
// @CrossOrigin(origins = "https://www.rollwithdfw.com")
public class SushiSubmissionController {

    private final SushSubmissionEmailService emailService;

    public SushiSubmissionController(SushSubmissionEmailService emailService) {
        this.emailService = emailService;
    }

    @PostMapping("/submissions")
    public ResponseEntity<?> handleSubmission(@Valid @RequestBody SubmissionRequest submissionRequest) {
        emailService.sendSubmissionEmail(submissionRequest);
        return ResponseEntity.ok().body(new ApiRespinse(true, "Sent"));
    }

    public record ApiRespinse(boolean success, String message) {
    }
}
