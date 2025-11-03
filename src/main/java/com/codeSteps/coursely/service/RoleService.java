package com.codeSteps.coursely.service;

import com.codeSteps.coursely.dto.RoleDTO;

import java.util.List;

public interface RoleService {
    List<RoleDTO> findAll();
    RoleDTO findById(Long id);
    RoleDTO save(RoleDTO roleDTO);
    void delete(Long id);
}
