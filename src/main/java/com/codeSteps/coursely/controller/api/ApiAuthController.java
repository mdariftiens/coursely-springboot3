package com.codeSteps.coursely.controller.api;

import com.codeSteps.coursely.entity.User;
import com.codeSteps.coursely.security.JwtUtil;
import com.codeSteps.coursely.service.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/auth")
public class ApiAuthController {

    private final UserService userService;
    private final JwtUtil jwtUtil;

    public ApiAuthController(UserService userService, JwtUtil jwtUtil) {
        this.userService = userService;
        this.jwtUtil = jwtUtil;
    }

    public static class LoginRequest {
        public String email;
        public String password;
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest req) {
        try {
            User user = userService.authenticate(req.email, req.password);
            String token = jwtUtil.generateToken(user.getId(), user.getEmail());
            Map<String, Object> resp = new HashMap<>();
            resp.put("token", token);
            resp.put("expiresIn", jwtUtil.getExpirationMillis());
            return ResponseEntity.ok(resp);
        } catch (Exception ex) {
            Map<String, String> err = new HashMap<>();
            err.put("error", ex.getMessage());
            return ResponseEntity.status(401).body(err);
        }
    }
}
