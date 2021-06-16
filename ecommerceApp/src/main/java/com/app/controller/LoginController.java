package com.app.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.entity.User;
import com.app.exception.ExistingUserException;
import com.app.exception.UserNotFoundException;
import com.app.model.UserResponse;
import com.app.service.UserService;

@CrossOrigin
@RestController
@RequestMapping
public class LoginController{
	
	private UserService userService;
	
	public LoginController(UserService userService) {
		super();
		this.userService = userService;
	}
	
	@PostMapping("/register")
	public ResponseEntity<UserResponse> registration(@RequestBody User user) throws ExistingUserException{
		return new ResponseEntity<UserResponse>(userService.register(user), HttpStatus.CREATED);
	}
	
	@PostMapping("/login")
	public ResponseEntity<UserResponse> login(@RequestBody User user) throws UserNotFoundException{
		return new ResponseEntity<UserResponse>(userService.validate(user),HttpStatus.OK);
	}
	
}
