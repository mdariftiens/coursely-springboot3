package com.codeSteps.coursely.entity;

import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "course_materials")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class CourseMaterial {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String fileUrl;
    private String fileType; // pdf, docx, pptx
    private LocalDateTime uploadedAt;

    @ManyToOne
    @JoinColumn(name = "course_id", nullable = false)
    private Course course;
}
