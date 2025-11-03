package com.codeSteps.coursely.service.impl;

import com.codeSteps.coursely.dto.RoleDTO;
import com.codeSteps.coursely.entity.Role;
import com.codeSteps.coursely.repository.RoleRepository;
import com.codeSteps.coursely.service.RoleService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class RoleServiceImpl implements RoleService {

    private final RoleRepository roleRepository;

    public RoleServiceImpl(RoleRepository roleRepository) {
        this.roleRepository = roleRepository;
    }

    private RoleDTO convertToDTO(Role role) {
        RoleDTO dto = new RoleDTO();
        dto.setId(role.getId());
        dto.setName(role.getName());
        return dto;
    }

    private Role convertToEntity(RoleDTO dto) {
        Role role = new Role();
        role.setId(dto.getId());
        role.setName(dto.getName());
        return role;
    }


    public List<RoleDTO> findAll() {
        return roleRepository.findAll()
                .stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    @Override
    public RoleDTO findById(Long id) {
        return roleRepository.findById(id)
                .map(this::convertToDTO)
                .orElse(null);
    }

    @Override
    public RoleDTO save(RoleDTO roleDTO) {
        Role saved = roleRepository.save(convertToEntity(roleDTO));
        return convertToDTO(saved);
    }

    @Override
    public void delete(Long id) {
        roleRepository.deleteById(id);
    }
}