package com.exercicio.site.application.service;
import java.util.Optional;

import com.exercicio.site.application.entity.User;
import com.exercicio.site.application.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
   

    @Autowired
    UserRepository userRepository;

    public Optional<User> findById(Long id){

       return userRepository.findById(id);
    }
    public void createNewUser(User user){
         userRepository.save(user);
    }
    public void deleteUser(Long id){
        userRepository.deleteById(id);
    }
   

}
