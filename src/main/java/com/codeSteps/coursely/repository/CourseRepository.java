package com.codeSteps.coursely.repository;

import com.codeSteps.coursely.entity.Course;
import org.springframework.boot.autoconfigure.data.web.SpringDataWebProperties;
import org.springframework.data.domain.Page;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface CourseRepository extends JpaRepository<Course, Long> {

    List<Course> findByIsFree(boolean isFree);

    Optional<Course> findById(long id);

    Optional<Course> findByName(String name);

    Page<Course> findByNameContainingIgnoreCase(String name, SpringDataWebProperties.Pageable pageable);

}
