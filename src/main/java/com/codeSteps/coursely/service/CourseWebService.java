package com.codeSteps.coursely.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.codeSteps.coursely.dto.CourseWebDTO;
import com.codeSteps.coursely.entity.Course;
import com.codeSteps.coursely.repository.CourseRepository;
import java.util.Optional;

@Service
@Transactional
public class CourseWebService {

    final private CourseRepository repository;

    public CourseWebService(CourseRepository repository) {
        this.repository = repository;
    }

    public CourseWebDTO save(CourseWebDTO dto) {
        Course course = new Course();
        course.setTitle(dto.getTitle());
        course.setDescription(dto.getDescription());
        course.setPrice(dto.getPrice());
        course.setFree(dto.isFree());
        // and return the saved entity as a DTO.
        Course savedCourse = repository.save(course);
        return toDTO(savedCourse);

    }

    @Transactional
    public void deleteCourse(Long id) {
        try {
            Optional<Course> courseOpt = repository.findById(id);
            if (courseOpt.isPresent()) {
                Course course = courseOpt.get();
                // Now delete the course
                repository.delete(course);

                System.out.println("✅ Course deleted with ID: " + id);
            } else {
                throw new RuntimeException("Course not found with ID: " + id);
            }
        } catch (Exception e) {
            throw new RuntimeException("Failed to delete course: " + e.getMessage(), e);
        }
    }

    public Optional<CourseWebDTO> findById(Long id) {
        return repository.findById(id)
                .map(this::toDTO);
    }

    public Optional<CourseWebDTO> update(CourseWebDTO dto) {
        return repository.findById(dto.getId())
                .map(course -> {
                    course.setTitle(dto.getTitle());
                    course.setDescription(dto.getDescription());
                    course.setPrice(dto.getPrice());
                    course.setFree(dto.isFree());
                    Course updatedCourse = repository.save(course);
                    return toDTO(updatedCourse);
                });
    }

    private CourseWebDTO toDTO(Course course) {
        CourseWebDTO d = new CourseWebDTO();
        d.setId(course.getId());
        d.setTitle(course.getTitle());
        d.setDescription(course.getDescription());
        d.setPrice(course.getPrice());
        d.setFree(course.isFree());
        return d;
    }

}
