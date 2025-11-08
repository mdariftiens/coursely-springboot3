package com.codeSteps.coursely.service;

import com.codeSteps.coursely.dto.CourseMaterialWebDTO;
import com.codeSteps.coursely.entity.Course;
import com.codeSteps.coursely.entity.CourseMaterial;
import com.codeSteps.coursely.repository.CourseMaterialRepository;
import com.codeSteps.coursely.repository.CourseRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@Transactional
public class CourseMaterialWebService {

    private final CourseMaterialRepository materialRepository;
    private final CourseRepository courseRepository;

    public CourseMaterialWebService(CourseMaterialRepository materialRepository, CourseRepository courseRepository) {
        this.materialRepository = materialRepository;
        this.courseRepository = courseRepository;
    }

    public List<CourseMaterialWebDTO> getAllMaterials() {
        return materialRepository.findAll()
                .stream()
                .map(this::toDTO)
                .collect(Collectors.toList());
    }

    public List<CourseMaterialWebDTO> getMaterialsByCourseId(Long courseId) {
        return materialRepository.findByCourseId(courseId)
                .stream()
                .map(this::toDTO)
                .collect(Collectors.toList());
    }

    public Optional<CourseMaterialWebDTO> getMaterialById(Long id) {
        return materialRepository.findById(id)
                .map(this::toDTO);
    }

    @Transactional
    public CourseMaterialWebDTO createMaterial(CourseMaterialWebDTO dto) {
        Course course = courseRepository.findById(dto.getCourseId())
                .orElseThrow(() -> new RuntimeException("Course not found with ID: " + dto.getCourseId()));

        CourseMaterial material = new CourseMaterial();
        updateMaterialFromDTO(material, dto, course);
        material.setUploadedAt(LocalDateTime.now());

        CourseMaterial savedMaterial = materialRepository.save(material);
        return toDTO(savedMaterial);
    }

    @Transactional
    public Optional<CourseMaterialWebDTO> updateMaterial(Long id, CourseMaterialWebDTO dto) {
        return materialRepository.findById(id)
                .map(material -> {
                    Course course = courseRepository.findById(dto.getCourseId())
                            .orElseThrow(() -> new RuntimeException("Course not found with ID: " + dto.getCourseId()));

                    updateMaterialFromDTO(material, dto, course);
                    return toDTO(materialRepository.save(material));
                });
    }

    @Transactional
    public void deleteMaterial(Long id) {
        try {
            if (!materialRepository.existsById(id)) {
                throw new RuntimeException("Material not found with ID: " + id);
            }
            materialRepository.deleteById(id);
        } catch (Exception e) {
            throw new RuntimeException("Error deleting material: " + e.getMessage(), e);
        }
    }

    private CourseMaterialWebDTO toDTO(CourseMaterial material) {
        CourseMaterialWebDTO dto = new CourseMaterialWebDTO();
        dto.setId(material.getId());
        dto.setTitle(material.getTitle());
        dto.setFileUrl(material.getFileUrl());
        dto.setFileType(material.getFileType());
        dto.setUploadedAt(material.getUploadedAt());
        dto.setCourseId(material.getCourse().getId());
        dto.setCourseName(material.getCourse().getTitle());
        return dto;
    }

    private void updateMaterialFromDTO(CourseMaterial material, CourseMaterialWebDTO dto, Course course) {
        material.setTitle(dto.getTitle());
        material.setFileUrl(dto.getFileUrl());
        material.setFileType(dto.getFileType());
        material.setCourse(course);
    }
}