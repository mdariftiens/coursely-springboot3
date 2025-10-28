package com.codeSteps.coursely.repository;

import com.codeSteps.coursely.entity.Video;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LessonRepository extends JpaRepository<Video, Long> {
}
