package com.capgemini.UserManagementSystem.Service;

import com.capgemini.UserManagementSystem.Entity.User;
import com.capgemini.UserManagementSystem.Exception.NotFoundException;
import com.capgemini.UserManagementSystem.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.nio.file.AccessDeniedException;
import java.util.ArrayList;
import java.util.List;

@Service
//@Transactional
public class UserService {
    @Autowired
    UserRepository userRepository;

    public List<User> findAllUsers()
    {
        List<User> userList=new ArrayList<>();
        userRepository.findAll().forEach(u->userList.add(u));
        return userList;
    }
    public User findUser(Long userId)
    {
        return userRepository.findById(userId).get();
    }
    public User findByEmail(String email) throws NotFoundException {
        var user = userRepository.findByEmail(email);
        if (user == null) {
            throw new NotFoundException("Invalid Email Id.");
        }
        else {
            return userRepository.findByEmail(email);
        }
    }
    public List<User> addUser(User user)
    {
        User user1=userRepository.save(user);
        return findAllUsers();
    }
    public User updateuser(User user)
    {
        User user1=userRepository.save(user);
        return user1;
    }
    public void deleteUser(Long userId) throws Exception {
        var user = this.findUser(userId);
        if (user.getRoles().stream().filter(u -> u.getName().equalsIgnoreCase("ROLE_ADMIN")).findFirst().isPresent())
        {
            throw new AccessDeniedException("Cannot Delete ADMIN user.");
        }
        userRepository.deleteById(userId);
    }
}