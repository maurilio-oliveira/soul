package com.exercicio.site.application.entity;

import javax.persistence.Entity;

@Entity
public class Accont {
    private String email;
    private String password;
    
    Accont(String email, String password){
        this.email = email;
        this.password = password;

    }
    public void setEmail(String email){
this.email = email;
    }

    public void setPassword(String password){
this.password = password;
    }

    public String toJsonString(){
        return (
            "{\"email\":"+this.email+",\"password\":" +this.password+ "}"
        );
    }
}
