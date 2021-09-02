package com.exercicio.site.application.repository;

import com.exercicio.site.application.entity.User;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends CrudRepository<User,Long>{
    
}
