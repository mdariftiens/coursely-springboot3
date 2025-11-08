package com.codeSteps.coursely.service;

import com.codeSteps.coursely.entity.Course;
import com.codeSteps.coursely.repository.CourseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CourseService {
    @Autowired
    private CourseRepository courseRepository;

    public List<Course> getAllCourses() {
        List<Course> courses = courseRepository.findAll();

        courses.forEach(c -> System.out.println(c));
        return courses;
    }

    public Course getCourseById(Long id) {
        return courseRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Course not found"));
    }

    public Course createCourse(Course course) {
        return courseRepository.save(course);
    }

    // public Course updateCourse(Long id, Course updated) {
    // Course course = getCourseById(id);
    // course.setTitle(updated.getTitle());
    // course.setDescription(updated.getDescription());
    // course.setPrice(updated.getPrice());
    // //course.setThumbnail(updated.getThumbnail());
    // return courseRepository.save(course);
    // }

    public void deleteCourse(Long id) {
        courseRepository.deleteById(id);
    }
}
