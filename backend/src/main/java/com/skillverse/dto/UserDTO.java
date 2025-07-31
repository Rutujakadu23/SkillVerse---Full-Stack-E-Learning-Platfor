package com.skillverse.dto;

import com.skillverse.entity.Role;
import lombok.Data;

@Data
public class UserDTO {
    private String username;
    private String email;
    private Role role;
}