package com.codeSteps.coursely.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class VideoLessonDTO {
    private Long id;
    private String title;
    private String url;
    private String thumbnailUrl;
    private Integer duration;
    private Integer series;
    private boolean isFree;
    private Double price;

    private Long courseId;
    private String courseTitle;

    public static VideoLessonDTO fromEntity(com.codeSteps.coursely.entity.Video v) {
        if (v == null)
            return null;
        return VideoLessonDTO.builder()
                .id(v.getId())
                .title(v.getTitle())
                .url(v.getUrl())
                .thumbnailUrl(v.getThumbnailUrl())
                .duration(v.getDuration())
                .series(v.getSeries())
                .isFree(v.isFree())
                .price(v.getPrice())
                .courseId(v.getCourse() != null ? v.getCourse().getId() : null)
                .courseTitle(v.getCourse() != null ? v.getCourse().getTitle() : null)
                .build();
    }
}
