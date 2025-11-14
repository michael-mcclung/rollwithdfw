package com.rollwithdfw.config;

import com.rollwithdfw.model.SushiSpot;
import com.rollwithdfw.repository.SushiSpotRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;

@Configuration
public class DataLoader {

    @Bean
    CommandLineRunner loadData(SushiSpotRepository repo) {
        return args -> {
            if (repo.count() == 0) {
                SushiSpot s1 = new SushiSpot();
                s1.setName("Tokyo Drift Sushi");
                s1.setArea("Deep Ellum, Dallas");
                s1.setRating(4.8);
                s1.setPrice("$$");
                s1.setHighlight("Creative rolls, ultra-fresh fish, and a chill late-night vibe.");
                s1.setTags(List.of("#RollWithDFW", "#BestOverall", "#LateNightDFW"));

                SushiSpot s2 = new SushiSpot();
                s2.setName("Umi on the Lake");
                s2.setArea("Lakefront, Fort Worth");
                s2.setRating(4.7);
                s2.setPrice("$$$");
                s2.setHighlight("Omakase-style chef’s menu with sunset views.");
                s2.setTags(List.of("#DateNightDFW", "#OmakaseTX"));

                repo.saveAll(List.of(s1, s2));
            }
        };
    }
}
