package com.codeSteps.coursely.repository;

import com.codeSteps.coursely.entity.BundleCourse;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BundleCourseRepository extends JpaRepository<BundleCourse, Long> {
    List<BundleCourse> findByBundleId(Long bundleId);
}