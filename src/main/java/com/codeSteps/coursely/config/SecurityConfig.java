package com.codeSteps.coursely.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        // Allow the application's own session-based auth to handle login/logout.
        http
                .authorizeHttpRequests(auth -> auth
                        .anyRequest().permitAll())
                .csrf(csrf -> csrf.disable());

        return http.build();
    }
}
