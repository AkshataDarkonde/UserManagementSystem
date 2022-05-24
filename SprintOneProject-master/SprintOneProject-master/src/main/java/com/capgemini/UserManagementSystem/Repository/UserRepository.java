package com.capgemini.UserManagementSystem.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.capgemini.UserManagementSystem.Entity.User;
import org.springframework.data.repository.CrudRepository;

@Repository
public interface UserRepository extends CrudRepository<User,Long> {
    User findByEmail(String email);
}
