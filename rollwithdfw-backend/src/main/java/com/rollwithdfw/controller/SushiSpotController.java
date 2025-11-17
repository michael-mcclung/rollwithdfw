package com.rollwithdfw.controller;

import java.util.List;
import com.rollwithdfw.model.SushiSpot;
import com.rollwithdfw.repository.SushiSpotRepository;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/spots")
@CrossOrigin(origins = "http://localhost:4200") // allow Angular dev server
public class SushiSpotController {

    private final SushiSpotRepository repository;

    public SushiSpotController(SushiSpotRepository repository) {
        this.repository = repository;
    }

    @GetMapping
    public List<SushiSpot> getAllSpots() {
        return repository.findAll();
    }

    @GetMapping("/{id}")
    public SushiSpot getSpot(@PathVariable Long id) {
        return repository.findById(id).orElseThrow();
    }

    @PostMapping
    public SushiSpot createSpot(@RequestBody SushiSpot spot) {
        return repository.save(spot);
    }
}
