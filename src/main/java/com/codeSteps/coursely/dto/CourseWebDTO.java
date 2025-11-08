package com.codeSteps.coursely.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public class CourseWebDTO {
    private Long id;
    @NotBlank(message = "Title is required")
    @Size(max = 255)
    private String title;
    @NotBlank(message = "Description is required")
    @Size(max = 2000)
    private String description;
    // @NotBlank(message = "Price is required")
    private Double price;
    private boolean free;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public boolean isFree() {
        return free;
    }

    public void setFree(boolean free) {
        this.free = free;
    }

}
