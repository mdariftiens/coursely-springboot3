package com.codeSteps.coursely.interceptor;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;

@Component
public class SessionAuthInterceptor implements HandlerInterceptor {

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler)
            throws Exception {
        String requestURI = request.getRequestURI();

        // Allow access to auth routes without session
        if (requestURI.startsWith("/dashboard/auth/")) {
            return true;
        }

        // Check if user is authenticated for dashboard routes
        if (requestURI.startsWith("/dashboard/")) {
            // prevent browser caching of protected pages
            response.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
            response.setHeader("Pragma", "no-cache");
            response.setDateHeader("Expires", 0);

            HttpSession session = request.getSession(false);

            if (session == null || session.getAttribute("userId") == null) {
                response.sendRedirect("/dashboard/auth/login");
                return false;
            }
        }

        return true;
    }
}