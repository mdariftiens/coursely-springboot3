package com.codeSteps.coursely.controller.api;

import com.codeSteps.coursely.entity.Course;
import com.codeSteps.coursely.service.CourseService;
import org.hibernate.query.Page;
import org.springframework.boot.autoconfigure.data.web.SpringDataWebProperties;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
@RequestMapping("/courses")
class CourseController {

    CourseService courseService;

    public CourseController(CourseService courseService) {
        this.courseService = courseService;
    }

    @GetMapping
    public ResponseEntity<Optional<Course>> getCourse(long courseID){
        return ResponseEntity.ofNullable(courseService.getCourse(courseID));
    }

    Page getCourses(SpringDataWebProperties.Pageable pageable, String sortBy){
        SpringDataWebProperties.Sort sort = new SpringDataWebProperties.Sort();
        Sort.by(Sort.Direction.ASC,sortBy);


        return pageable;
    }
}