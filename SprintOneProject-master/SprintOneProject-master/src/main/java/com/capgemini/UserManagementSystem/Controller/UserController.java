package com.capgemini.UserManagementSystem.Controller;

import com.capgemini.UserManagementSystem.Entity.User;
import com.capgemini.UserManagementSystem.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:4200/")
public class UserController {
    @Autowired
    UserService userService;

    @GetMapping("/getallusers")
    List<User> getAllUsers()
    {
        System.out.println("From Get All Users Method.");
        List<User> userList=userService.findAllUsers();
        return userList;
    }
    @GetMapping("/getuser/{userid}")
    User getUser(@PathVariable("userid") Long userId)
    {
        System.out.println("From Get User By Id Method.");
        return userService.findUser(userId);
    }
    @GetMapping("/getuserbyemail/{email}")
    User getUserByEmail(@PathVariable("email") String email)
    {
        System.out.println("From Get User By Email Method.");
        return userService.findByEmail(email);
    }
    @PostMapping("/adduser")
    List<User> addUser(@RequestBody User user)
    {
        System.out.println("From Add User Method.");
        return userService.addUser(user);
    }
    @PutMapping("/updateuser")
    User updateUser(@RequestBody User user)
    {
        System.out.println("From Update User Method.");
        return userService.updateuser(user);
    }
    @DeleteMapping("/deleteuser/{userid}")
    List<User> deleteUser(@PathVariable("userid") Long userId) throws Exception
    {
        System.out.println("From Delete User Method.");
        userService.deleteUser(userId);
        return userService.findAllUsers();
    }
}
