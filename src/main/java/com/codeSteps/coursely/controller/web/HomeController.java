package com.codeSteps.coursely.controller.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {

    @GetMapping("/")
    public String home() {
        return "dashboard/index";
    }

    @GetMapping("/abc")
    public String abc() {
        return "dashboard/abc";
    }
}
