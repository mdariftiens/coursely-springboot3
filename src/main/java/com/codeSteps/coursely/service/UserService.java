package com.codeSteps.coursely.service;

import com.codeSteps.coursely.dto.UserDTO;
import com.codeSteps.coursely.entity.Role;
import com.codeSteps.coursely.entity.User;
import com.codeSteps.coursely.repository.RoleRepository;
import com.codeSteps.coursely.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
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

    @Autowired
    private RoleRepository roleRepository;

    private final BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

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
        // Hash the password
        if (user.getPassword() != null && !user.getPassword().isEmpty()) {
            user.setPassword(passwordEncoder.encode(user.getPassword()));
        }
        User savedUser = userRepository.save(user);
        return UserDTO.fromEntity(savedUser);
    }

    public Optional<UserDTO> updateUser(Long id, UserDTO userDTO) {
        if (!userRepository.existsById(id)) {
            return Optional.empty();
        }

        User user = userDTO.toEntity();
        user.setId(id); // Ensure we're updating the correct user

        // Hash the password if it's provided
        if (user.getPassword() != null && !user.getPassword().isEmpty()) {
            user.setPassword(passwordEncoder.encode(user.getPassword()));
        }

        User savedUser = userRepository.save(user);
        return Optional.of(UserDTO.fromEntity(savedUser));
    }

    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }

    public User findByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    /**
     * Register a new user with email and password
     */
    public User register(String name, String email, String password) throws Exception {
        // Check if email already exists
        if (userRepository.findByEmail(email) != null) {
            throw new Exception("Email already registered");
        }

        // Get the default STUDENT role
        Role studentRole = roleRepository.findByName("STUDENT");
        if (studentRole == null) {
            throw new Exception("Default role not found");
        }

        // Create new user
        User user = new User();
        user.setName(name);
        user.setEmail(email);
        user.setPassword(passwordEncoder.encode(password));
        user.setRole(studentRole);

        return userRepository.save(user);
    }

    /**
     * Authenticate user with email and password
     */
    public User authenticate(String email, String password) throws Exception {
        User user = userRepository.findByEmail(email);
        if (user == null) {
            throw new Exception("Invalid email or password");
        }

        if (!passwordEncoder.matches(password, user.getPassword())) {
            throw new Exception("Invalid email or password");
        }

        return user;
    }

    /**
     * Check if email is available
     */
    public boolean isEmailAvailable(String email) {
        return userRepository.findByEmail(email) == null;
    }
}