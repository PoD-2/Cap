package com.app.service;

import com.app.entity.User;
import com.app.exception.ExistingUserException;
import com.app.exception.UserNotFoundException;
import com.app.model.UserResponse;

public interface UserService {

	UserResponse register(User user) throws ExistingUserException;

	UserResponse validate(User user) throws UserNotFoundException;
	
}
