package com.codeSteps.coursely.controller;

import com.codeSteps.coursely.dto.CourseMaterialWebDTO;
import com.codeSteps.coursely.service.CourseMaterialWebService;
import com.codeSteps.coursely.service.CourseWebService;
import jakarta.validation.Valid;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

@Controller
@RequestMapping("/materials")
public class CourseMaterialWebController {

    private final CourseMaterialWebService materialService;
    private final CourseWebService courseService;

    public CourseMaterialWebController(CourseMaterialWebService materialService, CourseWebService courseService) {
        this.materialService = materialService;
        this.courseService = courseService;
    }

    @GetMapping
    public String listMaterials(Model model) {
        model.addAttribute("materials", materialService.getAllMaterials());
        return "dashboard/materials/list";
    }

    @GetMapping("/course/{courseId}")
    public String listMaterialsByCourse(@PathVariable Long courseId, Model model) {
        model.addAttribute("materials", materialService.getMaterialsByCourseId(courseId));
        model.addAttribute("courseId", courseId);
        return "dashboard/materials/list";
    }

    @GetMapping("/create")
    public String showCreateForm(Model model, @RequestParam(required = false) Long courseId) {
        CourseMaterialWebDTO material = new CourseMaterialWebDTO();
        if (courseId != null) {
            material.setCourseId(courseId);
        }
        model.addAttribute("material", material);
        model.addAttribute("courses", courseService.getAllCourses());
        return "dashboard/materials/create";
    }

    @PostMapping("/create")
    public String createMaterial(
            @Valid @ModelAttribute("material") CourseMaterialWebDTO materialDTO,
            BindingResult bindingResult,
            Model model,
            RedirectAttributes redirectAttributes) {

        if (bindingResult.hasErrors()) {
            model.addAttribute("courses", courseService.getAllCourses());
            System.out.println("Validation errors: " + bindingResult.getAllErrors());
            return "dashboard/materials/create";
        }

        try {
            materialService.createMaterial(materialDTO);
            redirectAttributes.addFlashAttribute("successMessage", "Material created successfully!");
            return "redirect:/materials";
        } catch (Exception e) {
            model.addAttribute("courses", courseService.getAllCourses());
            model.addAttribute("errorMessage", "Error creating material: " + e.getMessage());
            return "dashboard/materials/create";
        }
    }

    @GetMapping("/edit/{id}")
    public String showEditForm(@PathVariable Long id, Model model, RedirectAttributes redirectAttributes) {
        var materialOpt = materialService.getMaterialById(id);
        if (materialOpt.isEmpty()) {
            redirectAttributes.addFlashAttribute("errorMessage", "Material not found!");
            return "redirect:/materials";
        }

        model.addAttribute("material", materialOpt.get());
        model.addAttribute("courses", courseService.getAllCourses());
        return "dashboard/materials/edit";
    }

    @PostMapping("/edit/{id}")
    public String updateMaterial(
            @PathVariable Long id,
            @Valid @ModelAttribute("material") CourseMaterialWebDTO materialDTO,
            BindingResult bindingResult,
            Model model,
            RedirectAttributes redirectAttributes) {

        if (bindingResult.hasErrors()) {
            model.addAttribute("courses", courseService.getAllCourses());
            return "dashboard/materials/edit";
        }

        try {
            var updated = materialService.updateMaterial(id, materialDTO);
            if (updated.isEmpty()) {
                redirectAttributes.addFlashAttribute("errorMessage", "Material not found!");
                return "redirect:/materials";
            }

            redirectAttributes.addFlashAttribute("successMessage", "Material updated successfully!");
            return "redirect:/materials";
        } catch (Exception e) {
            model.addAttribute("courses", courseService.getAllCourses());
            model.addAttribute("errorMessage", "Error updating material: " + e.getMessage());
            return "dashboard/materials/edit";
        }
    }

    @GetMapping("/delete/{id}")
    public String deleteMaterial(@PathVariable Long id, RedirectAttributes redirectAttributes) {
        try {
            var material = materialService.getMaterialById(id);
            if (material.isEmpty()) {
                redirectAttributes.addFlashAttribute("errorMessage", "Material not found!");
                return "redirect:/materials";
            }

            Long courseId = material.get().getCourseId();
            materialService.deleteMaterial(id);
            redirectAttributes.addFlashAttribute("successMessage", "Material deleted successfully!");
            return "redirect:/materials";

        } catch (Exception e) {
            redirectAttributes.addFlashAttribute("errorMessage", "Error deleting material: " + e.getMessage());
            return "redirect:/materials";
        }
    }
}