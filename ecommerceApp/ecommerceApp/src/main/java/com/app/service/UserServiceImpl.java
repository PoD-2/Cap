package com.app.service;

import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;

import com.app.entity.User;
import com.app.exception.ExistingUserException;
import com.app.exception.UserNotFoundException;
import com.app.model.UserResponse;
import com.app.repository.UserRepository;

@Service
public class UserServiceImpl implements UserService {

	private UserRepository userRepository;

	public UserServiceImpl(UserRepository userRepository) {
		super();
		this.userRepository = userRepository;
	}

	@Override
	public UserResponse register(User user) throws ExistingUserException {
		try {
			userRepository.save(user);
			return new UserResponse(user.getUserId(),user.getUserName(),user.getEmailId(), user.getPhoneNumber());
			
		} catch (DataIntegrityViolationException e) {
			throw new ExistingUserException("User Already Existing");
		}
	
	}

	@Override
	public UserResponse validate(User user) throws UserNotFoundException {
		
		User u = userRepository.findByEmailIdAndPassword(user.getEmailId(), user.getPassword());
		if(u!=null)
		{
			return new UserResponse(u.getUserId(),u.getUserName(),u.getEmailId(),u.getPhoneNumber());
		}
		else
		{
			throw new UserNotFoundException("User Not Found");
		}
	}
}
