package com.codeSteps.coursely.dto;

import com.codeSteps.coursely.entity.Course;
import com.codeSteps.coursely.entity.Video;

import java.util.List;
public class CourseDTO {

    private Long id;
    private String title;
    private String description;
    private Double price;
    private boolean free;
    private Object uploadedBy;
    private List<Video> videos;
    private List<?> materials;
    private List<?> comments;

    // New calculated fields
    private int totalSeries;
    private int totalDuration;

    public CourseDTO(Course course) {
        this.id = course.getId();
        this.title = course.getTitle();
        this.description = course.getDescription();
        this.price = course.getPrice();
        this.free = course.isFree();
        this.uploadedBy = course.getUploadedBy();
        this.videos = course.getVideos();
        this.materials = course.getMaterials();
        this.comments = course.getComments();

        // Compute totals
        this.totalSeries = (course.getVideos() != null) ? course.getVideos().size() : 0;
        this.totalDuration = (course.getVideos() != null)
                ? course.getVideos().stream()
                .mapToInt(Video::getDuration)
                .sum()
                : 0;
    }

    // Getters
    public Long getId() { return id; }
    public String getTitle() { return title; }
    public String getDescription() { return description; }
    public Double getPrice() { return price; }
    public boolean isFree() { return free; }
    public Object getUploadedBy() { return uploadedBy; }
    public List<Video> getVideos() { return videos; }
    public List<?> getMaterials() { return materials; }
    public List<?> getComments() { return comments; }
    public int getTotalSeries() { return totalSeries; }
    public int getTotalDuration() { return totalDuration; }
}
