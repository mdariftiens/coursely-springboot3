package com.codeSteps.coursely.service;

import com.codeSteps.coursely.dto.UserDTO;
import com.codeSteps.coursely.entity.User;
import com.codeSteps.coursely.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@Transactional
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public List<UserDTO> getAllUsers() {
        return userRepository.findAll()
                .stream()
                .map(UserDTO::fromEntity)
                .collect(Collectors.toList());
    }

    public Optional<UserDTO> getUserById(Long id) {
        return userRepository.findById(id)
                .map(UserDTO::fromEntity);
    }

    public UserDTO createUser(UserDTO userDTO) {
        User user = userDTO.toEntity();
        // In a real application, you should hash the password here
        User savedUser = userRepository.save(user);
        return UserDTO.fromEntity(savedUser);
    }

    public Optional<UserDTO> updateUser(Long id, UserDTO userDTO) {
        if (!userRepository.existsById(id)) {
            return Optional.empty();
        }

        User user = userDTO.toEntity();
        user.setId(id); // Ensure we're updating the correct user

        User savedUser = userRepository.save(user);
        return Optional.of(UserDTO.fromEntity(savedUser));
    }

    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }

    public User findByEmail(String email) {
        return userRepository.findByEmail(email);
    }
}