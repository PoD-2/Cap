package com.app.exception;

import java.util.Date;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.app.model.ErrorResponse;


@RestControllerAdvice
public class GlobalExceptionHandler {
	
	@ExceptionHandler(ExistingUserException.class)
	public ResponseEntity<ErrorResponse> handleException(ExistingUserException e) {
		ErrorResponse response=new ErrorResponse(new Date(),HttpStatus.CONFLICT.value(),HttpStatus.CONFLICT.getReasonPhrase(),e.getMessage());
		return new ResponseEntity<ErrorResponse>(response,HttpStatus.CONFLICT);
	}
	
	@ExceptionHandler(UserNotFoundException.class)
	public ResponseEntity<ErrorResponse> handleException(UserNotFoundException e) {
		ErrorResponse response=new ErrorResponse(new Date(),HttpStatus.UNAUTHORIZED.value(),HttpStatus.UNAUTHORIZED.getReasonPhrase(),e.getMessage());
		return new ResponseEntity<ErrorResponse>(response,HttpStatus.UNAUTHORIZED);
	}
	
	@ExceptionHandler(NotFoundException.class)
	public ResponseEntity<ErrorResponse> handleException(NotFoundException e) {
		ErrorResponse response=new ErrorResponse(new Date(),HttpStatus.NOT_FOUND.value(),HttpStatus.NOT_FOUND.getReasonPhrase(),e.getMessage());
		return new ResponseEntity<ErrorResponse>(response,HttpStatus.NOT_FOUND);
	}
	
	@ExceptionHandler(RuntimeException.class)
	@ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
	public ResponseEntity<ErrorResponse> handleException(RuntimeException e){
		ErrorResponse response=new ErrorResponse(new Date(),HttpStatus.INTERNAL_SERVER_ERROR.value(),HttpStatus.INTERNAL_SERVER_ERROR.getReasonPhrase(),"Internal Server Errror");
		return new ResponseEntity<ErrorResponse>(response,HttpStatus.INTERNAL_SERVER_ERROR);
	}
	
}
