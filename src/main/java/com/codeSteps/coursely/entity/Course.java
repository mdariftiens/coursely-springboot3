package com.codeSteps.coursely.entity;

import jakarta.persistence.*;
import lombok.*;
import java.util.List;

@Entity
@Table(name = "courses")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Course {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;

    @Column(length = 2000)
    private String description;

    private Double price;
    private boolean isFree;

    @ManyToOne
    @JoinColumn(name = "uploaded_by", nullable = false)
    private User uploadedBy; // Admin user

    @OneToMany(mappedBy = "course", cascade = CascadeType.ALL)
    private List<Video> videos;

    @OneToMany(mappedBy = "course", cascade = CascadeType.ALL)
    private List<CourseMaterial> materials;

    @OneToMany(mappedBy = "course", cascade = CascadeType.ALL)
    private List<Comment> comments;
}


