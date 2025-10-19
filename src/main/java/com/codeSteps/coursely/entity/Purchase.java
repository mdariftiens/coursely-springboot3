package com.codeSteps.coursely.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "purchases")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Purchase {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    private String purchaseType;  // COURSE, BUNDLE, VIDEO
    private Long referenceId;     // course_id / bundle_id / video_id
    private Double amount;
    private String paymentStatus; // PENDING, SUCCESS, FAILED

    @OneToOne(mappedBy = "purchase", cascade = CascadeType.ALL)
    private Payment payment;
}
