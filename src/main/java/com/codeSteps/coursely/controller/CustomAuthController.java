package com.codeSteps.coursely.controller;

import com.codeSteps.coursely.dto.UserDTO;
import com.codeSteps.coursely.entity.User;
import com.codeSteps.coursely.service.UserService;
import jakarta.servlet.http.HttpSession;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

@Controller
@RequestMapping("/")
public class CustomAuthController {

    @Autowired
    private UserService userService;

    /**
     * Show login form
     */
    @GetMapping("/")
    public String showLoginForm(Model model, HttpSession session) {
        // If already logged in, redirect to dashboard
        if (session.getAttribute("userId") != null) {
            return "redirect:/dashboard";
        }
        model.addAttribute("loginRequest", new LoginRequest());
        return "dashboard/auth/login";
    }

    /**
     * Process login
     */
    @PostMapping("/")
    public String processLogin(@ModelAttribute("loginRequest") LoginRequest loginRequest,
            HttpSession session,
            Model model,
            RedirectAttributes redirectAttributes) {
        try {
            // Authenticate user
            User user = userService.authenticate(loginRequest.getEmail(), loginRequest.getPassword());

            // Store user info in session
            session.setAttribute("userId", user.getId());
            session.setAttribute("userEmail", user.getEmail());
            session.setAttribute("userName", user.getName());
            session.setAttribute("userRole", user.getRole().getName());

            redirectAttributes.addFlashAttribute("successMessage", "Login successful!");
            return "redirect:/dashboard";

        } catch (Exception e) {
            model.addAttribute("errorMessage", e.getMessage());
            model.addAttribute("loginRequest", loginRequest);
            return "dashboard/auth/login";
        }
    }

    /**
     * Show registration form
     */
    @GetMapping("/register")
    public String showRegistrationForm(Model model, HttpSession session) {
        // If already logged in, redirect to dashboard
        if (session.getAttribute("userId") != null) {
            return "redirect:/dashboard";
        }
        model.addAttribute("registerRequest", new RegisterRequest());
        return "dashboard/auth/register";
    }

    /**
     * Process registration
     */
    @PostMapping("/register")
    public String processRegistration(@ModelAttribute("registerRequest") RegisterRequest registerRequest,
            Model model,
            RedirectAttributes redirectAttributes) {
        try {
            // Validate passwords match
            if (!registerRequest.getPassword().equals(registerRequest.getConfirmPassword())) {
                model.addAttribute("errorMessage", "Passwords do not match");
                model.addAttribute("registerRequest", registerRequest);
                return "dashboard/auth/register";
            }

            // Validate email not already registered
            if (!userService.isEmailAvailable(registerRequest.getEmail())) {
                model.addAttribute("errorMessage", "Email already registered");
                model.addAttribute("registerRequest", registerRequest);
                return "dashboard/auth/register";
            }

            // Register user
            userService.register(registerRequest.getName(), registerRequest.getEmail(), registerRequest.getPassword());

            redirectAttributes.addFlashAttribute("successMessage",
                    "Registration successful! Please login with your credentials.");
            return "redirect:/dashboard/auth/login";

        } catch (Exception e) {
            model.addAttribute("errorMessage", "Registration failed: " + e.getMessage());
            model.addAttribute("registerRequest", registerRequest);
            return "dashboard/auth/register";
        }
    }

    /**
     * Logout
     */
    @GetMapping("/logout")
    public String logout(jakarta.servlet.http.HttpServletRequest request,
            jakarta.servlet.http.HttpServletResponse response,
            RedirectAttributes redirectAttributes) {
        try {
            jakarta.servlet.http.HttpSession session = request.getSession(false);
            if (session != null) {
                session.invalidate();
            }

            // Remove JSESSIONID cookie so browser won't send it again
            jakarta.servlet.http.Cookie cookie = new jakarta.servlet.http.Cookie("JSESSIONID", null);
            cookie.setPath("/");
            cookie.setMaxAge(0);
            response.addCookie(cookie);
        } catch (Exception e) {
            // ignore
        }

        redirectAttributes.addFlashAttribute("successMessage", "Logged out successfully!");
        return "redirect:/";
    }

    // Inner classes for request objects
    public static class LoginRequest {
        private String email;
        private String password;
        private boolean rememberMe;

        public String getEmail() {
            return email;
        }

        public void setEmail(String email) {
            this.email = email;
        }

        public String getPassword() {
            return password;
        }

        public void setPassword(String password) {
            this.password = password;
        }

        public boolean isRememberMe() {
            return rememberMe;
        }

        public void setRememberMe(boolean rememberMe) {
            this.rememberMe = rememberMe;
        }
    }

    public static class RegisterRequest {
        private String name;
        private String email;
        private String password;
        private String confirmPassword;

        public String getName() {
            return name;
        }

        public void setName(String name) {
            this.name = name;
        }

        public String getEmail() {
            return email;
        }

        public void setEmail(String email) {
            this.email = email;
        }

        public String getPassword() {
            return password;
        }

        public void setPassword(String password) {
            this.password = password;
        }

        public String getConfirmPassword() {
            return confirmPassword;
        }

        public void setConfirmPassword(String confirmPassword) {
            this.confirmPassword = confirmPassword;
        }
    }
}