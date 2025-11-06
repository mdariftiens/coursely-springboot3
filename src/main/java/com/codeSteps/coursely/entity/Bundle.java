package com.codeSteps.coursely.entity;

import jakarta.persistence.*;

import java.math.BigDecimal;
import java.util.List;

@Entity
@Table(name = "bundles")
public class Bundle {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;

    @Column(length = 2000)
    private String description;

    @Column(precision = 10, scale = 2)
    private BigDecimal price;

    @OneToMany(mappedBy = "bundle", cascade = CascadeType.ALL)
    private List<BundleCourse> bundleCourses;

    // ===== Getters & Setters =====

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

    public BigDecimal getPrice() {
        return price;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }

    public List<BundleCourse> getBundleCourses() {
        return bundleCourses;
    }

    public void setBundleCourses(List<BundleCourse> bundleCourses) {
        this.bundleCourses = bundleCourses;
    }
}
