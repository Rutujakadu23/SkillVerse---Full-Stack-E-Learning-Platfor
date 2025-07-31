package com.skillverse.service;

import com.skillverse.entity.User;
import java.util.List;

public interface UserService {
    User register(User user);
    List<User> getAllUsers();
}