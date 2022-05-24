package com.capgemini.UserManagementSystem;

import com.capgemini.UserManagementSystem.Entity.Role;
import com.capgemini.UserManagementSystem.Entity.User;
import com.capgemini.UserManagementSystem.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.Arrays;

@SpringBootApplication
public class SprintOneProjectApplication {

	@Autowired
	private UserService userService;

	public static void main(String[] args) {
		SpringApplication.run(SprintOneProjectApplication.class, args);
	}

	@Bean
	public CommandLineRunner create()
	{
		return args -> {
			var user1 = new User("UmaMahesh","Gorsa",21,"ADMIN","gorsaumamahesh@gmail.com","mahesh", Arrays.asList(new Role("ADMIN")));
			var user2 = new User("Akshata Shivaji","Darkonde",20,"ADMIN","akshata.shivaji@gmail.com","akshata",Arrays.asList(new Role("ADMIN")));
			var user3 = new User("Sriram","Palivela",21,"ADMIN","sriram.palivela@gmail.com","sriram",Arrays.asList(new Role("ADMIN")));

			userService.addUser(user1);
			userService.addUser(user2);
			userService.addUser(user3);
		};
	}
}