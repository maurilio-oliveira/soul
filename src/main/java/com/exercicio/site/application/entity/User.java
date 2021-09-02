package com.exercicio.site.application.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;


@Entity
public class User{
    @Id
    @GeneratedValue(strategy =GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String lastName;
    private int sex;
    private int age;
    private String email;
    private String password;

    private Accont accont = new Accont(email, password);

   public User(){}

public Long getId() {
    return id;
}

public void setId(Long id) {
    this.id = id;
}

public String getName() {
    return name;
}

public void setName(String name) {
    this.name = name;
}

public String getLastName() {
    return lastName;
}

public void setLastName(String lastName) {
    this.lastName = lastName;
}

public int getSex() {
    return sex;
}

public void setSex(int sex) {
    this.sex = sex;
}

public int getAge() {
    return age;
}

public void setAge(int age) {
    this.age = age;
}

public void setAccont(Accont accont) {
    this.accont = accont;
}
public Accont getAccont() {
    return accont;
}
public String getEmail() {
    return email;
}
public void setEmail(String email) {
    this.email = email;
}
public String getPassword() {
    return password;
}
public void setPassword(String password) {
    this.password = password;
}

@Override
public int hashCode() {
    final int prime = 31;
    int result = 1;
    result = prime * result + ((id == null) ? 0 : id.hashCode());
    return result;
}

@Override
public boolean equals(Object obj) {
    if (this == obj)
        return true;
    if (obj == null)
        return false;
    if (getClass() != obj.getClass())
        return false;
    User other = (User) obj;
    if (id == null) {
        if (other.id != null)
            return false;
    } else if (!id.equals(other.id))
        return false;
    return true;
}



    

    // public String toJsonString(){
    //     return ("{\"name\":\""+this.name
    //             +"\",\"lastName\":"+this.lastName
    //             +"\",\"sex\":"+this.sex
    //             +"\",\"age\":"+this.age
    //            // +"\", \"accont\":" + this.accont.toJsonString()
    //     );
    //}


}
