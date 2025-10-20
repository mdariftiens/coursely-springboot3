package com.codeSteps.coursely.service;

import com.codeSteps.coursely.entity.Course;
import com.codeSteps.coursely.repository.CourseRepository;
import org.springframework.boot.autoconfigure.data.web.SpringDataWebProperties;
import org.springframework.data.domain.Page;

import java.util.List;
import java.util.Optional;

public class CourseService {

    private CourseRepository courseRepository;

    public CourseService(CourseRepository courseRepository) {
        this.courseRepository = courseRepository;
    }

    public Optional<Course> getCourse(Long id) {
        return courseRepository.findById(id);
    }

    public List<Course> getCourses() {
        return courseRepository.findAll();
    }
    public Optional<Course> getCourseByName(String name) {
        return courseRepository.findByName(name);
    }
    public Page<Course> getCourses(String keyword, SpringDataWebProperties.Pageable pageable) {
        if (keyword != null && !keyword.isEmpty())
            return courseRepository.findByNameContainingIgnoreCase(keyword, pageable);
        return null;
    }
}
