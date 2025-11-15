package com.rollwithdfw.model;

import jakarta.persistence.Entity;
import lombok.Data;

@Entity
@Data
public class SushiSubmission {

    private long id;
    private String restName;
    private String cityArea;
    private String email;
    private String custReason;

}
