package com.codeSteps.coursely.controller;

import com.codeSteps.coursely.dto.BundleDTO;
import com.codeSteps.coursely.service.BundleService;
import com.codeSteps.coursely.service.CourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

@Controller
@RequestMapping("/bundles")
public class BundleController {

    @Autowired
    private BundleService bundleService;

    @Autowired
    private CourseService courseService;

    @GetMapping
    public String listBundles(Model model) {
        model.addAttribute("bundles", bundleService.getAllBundles());
        return "dashboard/bundles/list";
    }

    @GetMapping("/create")
    public String showCreateForm(Model model) {
        model.addAttribute("bundle", new BundleDTO());
        model.addAttribute("courses", courseService.getAllCourses());
        return "dashboard/bundles/create";
    }

    @PostMapping("/create")
    public String createBundle(@ModelAttribute BundleDTO bundleDTO, RedirectAttributes redirectAttributes) {
        try {
            bundleService.createBundle(bundleDTO);
            redirectAttributes.addFlashAttribute("successMessage", "Bundle created successfully!");
        } catch (Exception e) {
            redirectAttributes.addFlashAttribute("errorMessage", "Error creating bundle: " + e.getMessage());
            return "redirect:/bundles/create";
        }
        return "redirect:/bundles";
    }

    @GetMapping("/edit/{id}")
    public String showEditForm(@PathVariable Long id, Model model, RedirectAttributes redirectAttributes) {
        var bundleOpt = bundleService.getBundleById(id);
        if (bundleOpt.isEmpty()) {
            redirectAttributes.addFlashAttribute("errorMessage", "Bundle not found!");
            return "redirect:/bundles";
        }

        model.addAttribute("bundle", bundleOpt.get());
        model.addAttribute("courses", courseService.getAllCourses());
        return "dashboard/bundles/edit";
    }

    @PostMapping("/edit/{id}")
    public String updateBundle(@PathVariable Long id, @ModelAttribute BundleDTO bundleDTO,
            RedirectAttributes redirectAttributes) {
        try {
            var updated = bundleService.updateBundle(id, bundleDTO);
            if (updated.isEmpty()) {
                redirectAttributes.addFlashAttribute("errorMessage", "Bundle not found!");
                return "redirect:/bundles";
            }
            redirectAttributes.addFlashAttribute("successMessage", "Bundle updated successfully!");
        } catch (Exception e) {
            redirectAttributes.addFlashAttribute("errorMessage", "Error updating bundle: " + e.getMessage());
            return "redirect:/bundles/edit/" + id;
        }
        return "redirect:/bundles";
    }

    @PostMapping("/delete/{id}")
    public String deleteBundle(@PathVariable Long id, RedirectAttributes redirectAttributes) {
        try {
            bundleService.deleteBundle(id);
            redirectAttributes.addFlashAttribute("successMessage", "Bundle deleted successfully!");
        } catch (Exception e) {
            redirectAttributes.addFlashAttribute("errorMessage", "Error deleting bundle: " + e.getMessage());
        }
        return "redirect:/bundles";
    }
}