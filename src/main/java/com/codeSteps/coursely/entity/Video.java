package com.codeSteps.coursely.entity;

import jakarta.persistence.*;
import lombok.*;
import java.util.List;

@Entity
@Table(name = "videos")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Video {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String url;          // Video file URL
    private String thumbnailUrl; // Thumbnail
    private Double price;
    private boolean isFree;
    private String storageType;  // local, s3, gcs
    private Integer duration;    // seconds
    private Integer series;
    public Long getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public String getUrl() {
        return url;
    }

    public String getThumbnailUrl() {
        return thumbnailUrl;
    }

    public Double getPrice() {
        return price;
    }

    public boolean isFree() {
        return isFree;
    }

    public String getStorageType() {
        return storageType;
    }

    public Integer getDuration() {
        return duration;
    }

    public Integer getSeries() {
        return series;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public void setThumbnailUrl(String thumbnailUrl) {
        this.thumbnailUrl = thumbnailUrl;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public void setFree(boolean free) {
        isFree = free;
    }

    public void setSeries(Integer series) {
        this.series = series;
    }

    public void setStorageType(String storageType) {
        this.storageType = storageType;
    }

    public void setDuration(Integer duration) {
        this.duration = duration;
    }

    @ManyToOne
    @JoinColumn(name = "course_id", nullable = false)
    private Course course;

    @OneToMany(mappedBy = "video", cascade = CascadeType.ALL)
    private List<Comment> comments;
}
