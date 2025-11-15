package com.rollwithdfw.model;

import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

import java.util.List;

@Entity
@Data
public class SushiSpot {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String area;
    private double rating;
    private String price;
    private String highlight;

    @ElementCollection
    private List<String> tags;

    // constructors (default + parameterized)
    public SushiSpot() {
    }

    public SushiSpot(String name, String area, double rating, String price, String highlight, List<String> tags) {
        this.name = name;
        this.area = area;
        this.rating = rating;
        this.price = price;
        this.highlight = highlight;
        this.tags = tags;
    }
    // getters + setters using Lombok @Data)
}
