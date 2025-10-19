package com.codeSteps.coursely.entity;


import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "bundle_courses")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class BundleCourse {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "bundle_id", nullable = false)
    private Bundle bundle;

    @ManyToOne
    @JoinColumn(name = "course_id", nullable = false)
    private Course course;
}
