package com.codeSteps.coursely.service;

import com.codeSteps.coursely.entity.Video;
import com.codeSteps.coursely.repository.LessonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LessonService {
    @Autowired
    LessonRepository lessonRepository;
    public List<Video> allLesson(){
        List<Video> lessons = lessonRepository.findAll();
        return lessons;
    }
}
