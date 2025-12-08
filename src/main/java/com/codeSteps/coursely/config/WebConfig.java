package com.codeSteps.coursely.config;

import com.codeSteps.coursely.interceptor.SessionAuthInterceptor;
import com.codeSteps.coursely.interceptor.ApiAuthInterceptor;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    private final SessionAuthInterceptor sessionAuthInterceptor;
    private final ApiAuthInterceptor apiAuthInterceptor;

    public WebConfig(SessionAuthInterceptor sessionAuthInterceptor, ApiAuthInterceptor apiAuthInterceptor) {
        this.sessionAuthInterceptor = sessionAuthInterceptor;
        this.apiAuthInterceptor = apiAuthInterceptor;
    }

    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(sessionAuthInterceptor)
                .addPathPatterns("/dashboard/**")
                .excludePathPatterns("/dashboard/auth/**", "/css/**", "/js/**", "/images/**", "/assets/**");

        // Protect API routes (except /api/auth/**)
        registry.addInterceptor(apiAuthInterceptor)
                .addPathPatterns("/api/**")
                .excludePathPatterns("/api/auth/**", "/api/public/**");
    }
}