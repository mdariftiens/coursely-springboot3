package com.codeSteps.coursely.controller.api;

import com.codeSteps.coursely.entity.Video;
import com.codeSteps.coursely.service.LessonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("api/v1/lessons")
public class LessonController {
    @Autowired
    LessonService lessonService;

    @GetMapping
    public ResponseEntity<List<Video>> getAllLesson(){
        List<Video> lessons = lessonService.allLesson();
        return ResponseEntity.ok(lessons);
    }
}
