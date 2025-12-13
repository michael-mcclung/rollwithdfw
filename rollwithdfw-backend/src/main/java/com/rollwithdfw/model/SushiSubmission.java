package com.rollwithdfw.model;

import jakarta.persistence.*;

@Entity
public class SushiSubmission {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String fullName;
    private String restName;
    private String cityArea;
    private String email;
    private String custReason;

    // constructors, getters, and setters (using Lombok @Data)
    public SushiSubmission() {
    }

    public SushiSubmission(
            Long id,
            String fullName,
            String restName,
            String cityArea,
            String email,
            String custReason) {
        this.id = id;
        this.fullName = fullName;
        this.restName = restName;
        this.cityArea = cityArea;
        this.email = email;
        this.custReason = custReason;
    }

    // id getters and setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    // full name getters and setters
    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    // get name getters and setters
    public String getRestName() {
        return restName;
    }

    public void setRestName(String restName) {
        this.restName = restName;
    }

    // city area getters and setters
    public String getCityArea() {
        return cityArea;
    }

    public void setCityArea(String cityArea) {
        this.cityArea = cityArea;
    }

    // email getters and setters
    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    // customer reason getters and setters
    public String getCustReason() {
        return custReason;
    }

    public void setCustReason(String custReason) {
        this.custReason = custReason;
    }
}
