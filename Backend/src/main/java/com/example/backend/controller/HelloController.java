package com.example.backend.controller;

import com.example.backend.model.User;
import com.example.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {

    @Autowired
    private final UserRepository userRepository;
    User user = new User();
    public HelloController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }
    @GetMapping("/")
    public String Hello(){
        user.setUsername("admin");
        user.setPassword("admin");
       userRepository.save(user);

        return "Hello World";
    }
}
