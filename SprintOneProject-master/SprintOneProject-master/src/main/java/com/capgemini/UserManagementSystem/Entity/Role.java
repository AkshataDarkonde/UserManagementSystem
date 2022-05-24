package com.capgemini.UserManagementSystem.Entity;

import javax.persistence.*;

@Entity
@Table(name = "Role")
public class Role {
    @Id
    @GeneratedValue
    private Long id;
    private String roleName;
    public Role()
    {}

    public Role(String roleName)
    {
        super();
        this.roleName=roleName;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return roleName;
    }

    public void setName(String roleName) {
        this.roleName = roleName;
    }
}
