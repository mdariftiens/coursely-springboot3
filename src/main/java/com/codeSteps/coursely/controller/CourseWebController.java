package com.codeSteps.coursely.controller;

import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.RequestMapping;

import com.codeSteps.coursely.dto.CourseWebDTO;
import com.codeSteps.coursely.entity.Course;
import com.codeSteps.coursely.repository.CourseRepository;
import com.codeSteps.coursely.service.CourseWebService;

import jakarta.validation.Valid;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
@RequestMapping("/course")
public class CourseWebController {

    final private CourseRepository CourseRepository;
    final private CourseWebService courseWebService;

    public CourseWebController(CourseRepository courseRepository, CourseWebService courseWebService) {
        this.CourseRepository = courseRepository;
        this.courseWebService = courseWebService;
    }

    @GetMapping
    public String CourseList(Model model) {
        List<Course> courses = CourseRepository.findAll();
        model.addAttribute("courses", courses);
        return "dashboard/courses/list";
    }

    @GetMapping("create")
    public String CourseCreate(Model model) {
        model.addAttribute("course", new Course());
        return "dashboard/courses/create";
    }

    @PostMapping("create")
    public String save(@Valid @ModelAttribute("course") CourseWebDTO courseWebDTO, BindingResult result, Model model,
            org.springframework.web.servlet.mvc.support.RedirectAttributes redirectAttributes) {
        if (result.hasErrors()) {
            return "dashboard/courses/create"; // return form with errors
        }
        courseWebService.save(courseWebDTO);
        redirectAttributes.addFlashAttribute("successMessage", "Course updated successfully!");
        return "redirect:/course";
    }

    @GetMapping("edit/{id}")
    public String editCourse(@PathVariable Long id, Model model,
            org.springframework.web.servlet.mvc.support.RedirectAttributes redirectAttributes) {
        var courseOpt = courseWebService.findById(id);
        if (courseOpt.isEmpty()) {
            redirectAttributes.addFlashAttribute("errorMessage", "Course not found!");
            return "redirect:/course";
        }

        model.addAttribute("course", courseOpt.get());
        return "dashboard/courses/edit";
    }

    @PostMapping("edit/{id}")
    public String updateCourse(@PathVariable Long id, @Valid @ModelAttribute("course") CourseWebDTO courseWebDTO,
            BindingResult result,
            Model model, org.springframework.web.servlet.mvc.support.RedirectAttributes redirectAttributes) {
        if (result.hasErrors()) {
            return "dashboard/courses/edit"; // return form with errors
        }
        var updated = courseWebService.update(courseWebDTO);
        if (updated.isEmpty()) {
            redirectAttributes.addFlashAttribute("errorMessage", "Course not found!");
            return "redirect:/course";
        }
        redirectAttributes.addFlashAttribute("successMessage", "Course updated successfully!");
        return "redirect:/course";
    }

    @GetMapping("delete/{id}")
    public String deleteCourse(@PathVariable Long id, Model model,
            org.springframework.web.servlet.mvc.support.RedirectAttributes redirectAttributes) {
        try {
            System.out.println("Attempting to delete course with ID: " + id);
            courseWebService.deleteCourse(id);
            redirectAttributes.addFlashAttribute("successMessage", "Course successfully deleted");
        } catch (Exception e) {
            System.err.println("Failed to delete course: " + e.getMessage());
            redirectAttributes.addFlashAttribute("errorMessage", "Failed to delete course: " + e.getMessage());
        }
        return "redirect:/course";
    }

}
