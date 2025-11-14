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

    // getters + setters (or use Lombok @Data)
    // public Long getId() { return id; }
    // public void setId(Long id) { this.id = id; }

    // public String getName() { return name; }
    // public void setName(String name) { this.name = name; }

    // public String getArea() { return area; }
    // public void setArea(String area) { this.area = area; }

    // public double getRating() { return rating; }
    // public void setRating(double rating) { this.rating = rating; }

    // public String getPrice() { return price; }
    // public void setPrice(String price) { this.price = price; }

    // public String getHighlight() { return highlight; }
    // public void setHighlight(String highlight) { this.highlight = highlight; }

    // public List<String> getTags() { return tags; }
    // public void setTags(List<String> tags) { this.tags = tags; }
}
