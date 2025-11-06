package com.codeSteps.coursely.service;

import com.codeSteps.coursely.dto.BundleDTO;
import com.codeSteps.coursely.entity.Bundle;
import com.codeSteps.coursely.entity.BundleCourse;
import com.codeSteps.coursely.entity.Course;
import com.codeSteps.coursely.repository.BundleRepository;
import com.codeSteps.coursely.repository.CourseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.util.Collections;
import java.util.List;
import java.util.Objects;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@Transactional
public class BundleService {

    @Autowired
    private BundleRepository bundleRepository;

    @Autowired
    private CourseRepository courseRepository;

    public List<BundleDTO> getAllBundles() {
        return bundleRepository.findAll()
                .stream()
                .map(BundleDTO::fromEntity)
                .collect(Collectors.toList());
    }

    public Optional<BundleDTO> getBundleById(Long id) {
        return bundleRepository.findById(id)
                .map(BundleDTO::fromEntity);
    }

    public BundleDTO createBundle(BundleDTO bundleDTO) {
        Bundle bundle = new Bundle();
        updateBundleFromDTO(bundle, bundleDTO);
        Bundle savedBundle = bundleRepository.save(bundle);
        return BundleDTO.fromEntity(savedBundle);
    }

    public Optional<BundleDTO> updateBundle(Long id, BundleDTO bundleDTO) {
        return bundleRepository.findById(id)
                .map(bundle -> {
                    updateBundleFromDTO(bundle, bundleDTO);
                    return BundleDTO.fromEntity(bundleRepository.save(bundle));
                });
    }

    public void deleteBundle(Long id) {
        bundleRepository.deleteById(id);
    }

    private void updateBundleFromDTO(Bundle bundle, BundleDTO dto) {
        bundle.setTitle(dto.getTitle());
        bundle.setDescription(dto.getDescription());
        if (bundle.getPrice() != null) {
            dto.setPrice(bundle.getPrice());
        } else {
            dto.setPrice(null);
        }

        if (bundle.getBundleCourses() != null && !bundle.getBundleCourses().isEmpty()) {
            List<Long> ids = bundle.getBundleCourses().stream()
                    // each BundleCourse should have getCourse() -> Course with getId()
                    .map(BundleCourse::getCourse) // adjust if method name differs
                    .filter(Objects::nonNull)
                    .map(course -> course.getId())
                    .filter(Objects::nonNull)
                    .collect(Collectors.toList());
            dto.setCourseIds(ids);
        } else {
            dto.setCourseIds(Collections.emptyList());
        }
    }
}