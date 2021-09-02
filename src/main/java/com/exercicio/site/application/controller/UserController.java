package com.exercicio.site.application.controller;

import com.exercicio.site.application.entity.User;
import com.exercicio.site.application.service.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/user")
@RestController
public class UserController {
    @Autowired
    UserService userService;

   
    User user = new User();

    @PostMapping("/usa")
    void createUser (@RequestBody User user){
        userService.createNewUser(user);
    }

    @GetMapping("/pull/{id}")
    public ResponseEntity getUser(@PathVariable Long id){
        return ResponseEntity.ok().body(userService.findById(id));
    }
    
    @GetMapping("/aux")
    public ResponseEntity axu(){
        return ResponseEntity.ok().body(user);
    }
}