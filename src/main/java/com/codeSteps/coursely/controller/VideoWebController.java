package com.codeSteps.coursely.controller;

import com.codeSteps.coursely.dto.VideoWebDTO;
import com.codeSteps.coursely.service.VideoWebService;
import com.codeSteps.coursely.service.CourseWebService;
import jakarta.validation.Valid;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

@Controller
@RequestMapping("/videos")
public class VideoWebController {

    private final VideoWebService videoService;
    private final CourseWebService courseService;

    public VideoWebController(VideoWebService videoService, CourseWebService courseService) {
        this.videoService = videoService;
        this.courseService = courseService;
    }

    @GetMapping
    public String listVideos(Model model) {
        model.addAttribute("videos", videoService.getAllVideos());
        return "dashboard/videos/list";
    }

    @GetMapping("/course/{courseId}")
    public String listVideosByCourse(@PathVariable Long courseId, Model model) {
        model.addAttribute("videos", videoService.getVideosByCourseId(courseId));
        model.addAttribute("courseId", courseId);
        return "dashboard/videos/list";
    }

    @GetMapping("/create")
    public String showCreateForm(Model model, @RequestParam(required = false) Long courseId) {
        VideoWebDTO video = new VideoWebDTO();
        if (courseId != null) {
            video.setCourseId(courseId);
        }
        model.addAttribute("video", video);
        model.addAttribute("courses", courseService.getAllCourses());
        return "dashboard/videos/create";
    }

    @PostMapping("/create")
    public String createVideo(
            @Valid @ModelAttribute("video") VideoWebDTO videoDTO,
            BindingResult bindingResult,
            Model model,
            RedirectAttributes redirectAttributes) {

        if (bindingResult.hasErrors()) {
            model.addAttribute("courses", courseService.getAllCourses());
            return "dashboard/videos/create";
        }

        try {
            videoService.createVideo(videoDTO);
            redirectAttributes.addFlashAttribute("successMessage", "Video created successfully!");
            return "redirect:/videos";
        } catch (Exception e) {
            model.addAttribute("courses", courseService.getAllCourses());
            model.addAttribute("errorMessage", "Error creating video: " + e.getMessage());
            return "dashboard/videos/create";
        }
    }

    @GetMapping("/edit/{id}")
    public String showEditForm(@PathVariable Long id, Model model, RedirectAttributes redirectAttributes) {
        var videoOpt = videoService.getVideoById(id);
        if (videoOpt.isEmpty()) {
            redirectAttributes.addFlashAttribute("errorMessage", "Video not found!");
            return "redirect:/videos";
        }

        model.addAttribute("video", videoOpt.get());
        model.addAttribute("courses", courseService.getAllCourses());
        return "dashboard/videos/edit";
    }

    @PostMapping("/edit/{id}")
    public String updateVideo(
            @PathVariable Long id,
            @Valid @ModelAttribute("video") VideoWebDTO videoDTO,
            BindingResult bindingResult,
            Model model,
            RedirectAttributes redirectAttributes) {

        if (bindingResult.hasErrors()) {
            model.addAttribute("courses", courseService.getAllCourses());
            return "dashboard/videos/edit";
        }

        try {
            var updated = videoService.updateVideo(id, videoDTO);
            if (updated.isEmpty()) {
                redirectAttributes.addFlashAttribute("errorMessage", "Video not found!");
                return "redirect:/videos";
            }

            redirectAttributes.addFlashAttribute("successMessage", "Video updated successfully!");
            return "redirect:/videos";
        } catch (Exception e) {
            model.addAttribute("courses", courseService.getAllCourses());
            model.addAttribute("errorMessage", "Error updating video: " + e.getMessage());
            return "dashboard/videos/edit";
        }
    }

    @GetMapping("/delete/{id}")
    public String deleteVideo(@PathVariable Long id, RedirectAttributes redirectAttributes) {
        try {
            var video = videoService.getVideoById(id);
            if (video.isEmpty()) {
                redirectAttributes.addFlashAttribute("errorMessage", "Video not found!");
                return "redirect:/videos";
            }

            Long courseId = video.get().getCourseId();
            videoService.deleteVideo(id);
            redirectAttributes.addFlashAttribute("successMessage", "Video deleted successfully!");
            return "redirect:/videos";

        } catch (Exception e) {
            redirectAttributes.addFlashAttribute("errorMessage", "Error deleting video: " + e.getMessage());
            return "redirect:/videos";
        }
    }
}