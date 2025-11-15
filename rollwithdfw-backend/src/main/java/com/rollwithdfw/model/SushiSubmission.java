package com.rollwithdfw.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class SushiSubmission {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String restName;
    private String cityArea;
    private String email;
    private String custReason;

    // constructors, getters, and setters (using Lombok @Data)
    public SushiSubmission() {
    }

    public SushiSubmission(String restName, String cityArea, String email, String custReason) {
        this.restName = restName;
        this.cityArea = cityArea;
        this.email = email;
        this.custReason = custReason;
    }
}
