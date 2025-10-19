package com.codeSteps.coursely.repository;

import com.codeSteps.coursely.entity.Payment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PaymentRepository extends JpaRepository<Payment, Long> {
    Payment findByPurchaseId(Long purchaseId);
}

