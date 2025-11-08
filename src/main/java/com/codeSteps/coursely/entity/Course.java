package com.codeSteps.coursely.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.*;
import java.util.List;

@Data
@Entity
@Table(name = "courses")
@NoArgsConstructor
@AllArgsConstructor
@Builder
// @Getter
// @Setter
@JsonIgnoreProperties({ "hibernateLazyInitializer", "handler" })
public class Course {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;

    @Column(length = 2000)
    private String description;

    private Double price;
    private boolean isFree;

    public Long getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public String getDescription() {
        return description;
    }

    public Double getPrice() {
        return price;
    }

    public boolean isFree() {
        return isFree;
    }

    public User getUploadedBy() {
        return uploadedBy;
    }

    public List<Video> getVideos() {
        return videos;
    }

    public List<CourseMaterial> getMaterials() {
        return materials;
    }

    public List<Comment> getComments() {
        return comments;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public void setFree(boolean free) {
        isFree = free;
    }

    public void setUploadedBy(User uploadedBy) {
        this.uploadedBy = uploadedBy;
    }

    public void setVideos(List<Video> videos) {
        this.videos = videos;
    }

    public void setMaterials(List<CourseMaterial> materials) {
        this.materials = materials;
    }

    public void setComments(List<Comment> comments) {
        this.comments = comments;
    }

    @ManyToOne
    @JoinColumn(name = "uploaded_by")
    private User uploadedBy; // Admin user

    @OneToMany(mappedBy = "course", cascade = CascadeType.ALL)
    private List<Video> videos;

    @OneToMany(mappedBy = "course", cascade = CascadeType.ALL)
    private List<CourseMaterial> materials;

    @OneToMany(mappedBy = "course", cascade = CascadeType.ALL)
    private List<Comment> comments;
}
