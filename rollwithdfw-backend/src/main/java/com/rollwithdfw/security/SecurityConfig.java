package com.rollwithdfw.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .csrf(csrf -> csrf.disable()) // you can refine this later
                .authorizeHttpRequests(auth -> auth
                        .requestMatchers("/api/submissions/**").permitAll() // allow public submissions
                        .anyRequest().authenticated() // everything else needs auth
                )
                .formLogin(form -> form.defaultSuccessUrl("/", true));

        return http.build();
    }
}
