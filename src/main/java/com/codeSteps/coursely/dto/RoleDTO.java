package com.codeSteps.coursely.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public class RoleDTO {
    private Long id;


    @Size(min = 3, max = 50, message = "Role name must be between 3 and 50 characters")
    @NotBlank(message = "Role name is required")
    private String name;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
