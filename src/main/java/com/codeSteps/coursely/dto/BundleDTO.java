package com.codeSteps.coursely.dto;

import com.codeSteps.coursely.entity.Bundle;
import com.codeSteps.coursely.entity.BundleCourse;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

import java.math.BigDecimal;
import java.util.Collections;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class BundleDTO {
    private Long id;
    private String title;
    private String description;
    private BigDecimal price;
    private List<Long> courseIds;

    public static BundleDTO fromEntity(Bundle bundle) {
        if (bundle == null) {
            return null;
        }

        BundleDTO dto = new BundleDTO();
        dto.setId(bundle.getId());
        dto.setTitle(bundle.getTitle());
        dto.setDescription(bundle.getDescription());
        dto.setPrice(bundle.getPrice());
        // Convert Double (entity) to BigDecimal (dto) safely
        // if (bundle.getPrice() != null) {
        // dto.setPrice(BigDecimal.valueOf(bundle.getPrice()));
        // } else {
        // dto.setPrice(null);
        // }

        // Map bundleCourses -> courseIds
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

        return dto;
    }
}
