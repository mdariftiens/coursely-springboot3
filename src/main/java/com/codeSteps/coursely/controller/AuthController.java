package com.codeSteps.coursely.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class AuthController {

    @GetMapping("login")
    public String login() {
        return "dashboard/auth/login";
    }

    @GetMapping("register")
    public String register() {
        return "dashboard/auth/register";
    }
}
