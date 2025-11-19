package com.rollwithdfw.dto;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Data;

@Data
public class SubmissionRequest {

    @JsonProperty("resturant")
    private String resturant;

    @JsonProperty("area")
    private String area;

    @JsonProperty("email")
    private String email;

    @JsonProperty("details")
    private String details;

}
