package com.codeSteps.coursely;

import com.codeSteps.coursely.service.RoleService;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.BeforeEach;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;

import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@SpringBootTest
class CourselyApplicationTests {

    @Autowired
    private WebApplicationContext webApplicationContext;

    @MockBean
    private RoleService roleService;

    private MockMvc mockMvc;

    @BeforeEach
    void setUp() {
        mockMvc = MockMvcBuilders.webAppContextSetup(webApplicationContext).build();
    }

    @Test
    void contextLoads() {
    }

    @Test
    void getAllRoles_ShouldReturnRolesList() throws Exception {
        mockMvc.perform(get("/roles"))
                .andExpect(status().isOk());
    }

    @Test
    void getRole_ShouldReturnRole() throws Exception {
        mockMvc.perform(get("/roles/1"))
                .andExpect(status().isOk());
    }

    @Test
    void createRole_ShouldReturnCreatedRole() throws Exception {
        mockMvc.perform(post("/roles")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("{\"name\":\"TEST_ROLE\"}"))
                .andExpect(status().isOk());
    }

    @Test
    void updateRole_ShouldReturnUpdatedRole() throws Exception {
        mockMvc.perform(put("/roles/1")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("{\"name\":\"UPDATED_ROLE\"}"))
                .andExpect(status().isOk());
    }

    @Test
    void deleteRole_ShouldReturnNoContent() throws Exception {
        mockMvc.perform(delete("/api/roles/1"))
                .andExpect(status().isNoContent());
    }
}
