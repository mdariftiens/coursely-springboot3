package com.codeSteps.coursely.dto;

import com.codeSteps.coursely.entity.Video;

public class LessonResponseDTO {
    private Long id;
    private String couseTitle;

    private int totalSeries;
    private int totalLesson;

    public void LessonsDTO(Video video){
        this.id = video.getId();
        this.couseTitle = video.getTitle();
//        this.totalSeries =  (video.getSeries() != null) ? video.getSeries() : 0;
//        this.totalLesson =  (video.getId() != null) ? video.getId() : 0;
    }
}
