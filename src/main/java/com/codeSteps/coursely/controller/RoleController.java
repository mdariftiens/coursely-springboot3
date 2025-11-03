package com.codeSteps.coursely.controller;

import com.codeSteps.coursely.dto.RoleDTO;
import com.codeSteps.coursely.service.RoleService;
import jakarta.validation.Valid;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
@Controller
@RequestMapping("/roles")
public class RoleController {

    private final RoleService roleService;

    public RoleController(RoleService roleService) {
        this.roleService = roleService;
    }

    @GetMapping
    public String listRoles(Model model) {
        model.addAttribute("roles", roleService.findAll());
        return "dashboard/roles/index";
    }

    @GetMapping("/create")
    public String createForm(Model model) {
        model.addAttribute("role", new RoleDTO());
        return "dashboard/roles/create";
    }

//    @PostMapping
//    public String saveRole(@ModelAttribute("role") RoleDTO roleDTO) {
//        roleService.save(roleDTO);
//        return "redirect:/roles";
//    }

    @PostMapping
    public String saveRole(
            @Valid @ModelAttribute("role") RoleDTO roleDTO,
            BindingResult result,
            Model model
    ) {
        if (result.hasErrors()) {
            return "roles/create";
        }
        roleService.save(roleDTO);
        return "redirect:/roles";
    }

    @GetMapping("/edit/{id}")
    public String editForm(@PathVariable Long id, Model model) {
        model.addAttribute("role", roleService.findById(id));
        return "dashboard/roles/edit";
    }

    @PostMapping("/update/{id}")
    public String updateRole(@PathVariable Long id, @ModelAttribute("role") RoleDTO roleDTO) {
        roleDTO.setId(id);
        roleService.save(roleDTO);
        return "redirect:/roles";
    }

    @GetMapping("/delete/{id}")
    public String deleteRole(@PathVariable Long id) {
        roleService.delete(id);
        return "redirect:/roles";
    }
}