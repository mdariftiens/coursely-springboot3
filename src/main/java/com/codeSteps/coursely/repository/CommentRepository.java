package com.codeSteps.coursely.repository;


import com.codeSteps.coursely.entity.Comment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CommentRepository extends JpaRepository<Comment, Long> {
    List<Comment> findByCourseId(Long courseId);
    List<Comment> findByVideoId(Long videoId);
}
