package com.capgemini.UserManagementSystem.Entity;

import javax.persistence.*;
import java.util.Collection;

@Entity
@Table(name="User",uniqueConstraints = @UniqueConstraint(columnNames = "email"))
public class User {
    @Id
    @GeneratedValue
    private Long id;
    private String firstname;
    private String lastname;
    private int age;
    private String role;
    @Column(name="email")
    private String email;
    @Column(name="password")
    private String password;
    @ManyToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinTable(name = "User_Role", joinColumns = @JoinColumn(name = "UserId", referencedColumnName = "id"), inverseJoinColumns = @JoinColumn(name = "RoleId", referencedColumnName = "id"))
    private Collection<Role> roles;
    public User()
    {}

    public User(String firstname, String lastname,int age,String role,String email, String password, Collection<Role> roles)
    {
        super();
        this.firstname=firstname;
        this.lastname=lastname;
        this.email=email;
        this.age=age;
        this.role=role;
        this.password=password;
        this.roles=roles;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFirstname() {
        return firstname;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
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

    public Collection<Role> getRoles() {
        return roles;
    }

    public void setRoles(Collection<Role> roles) {
        this.roles = roles;
    }
}
