package com.app.model;

public class UserResponse {
	
	private int userId;
	private String userName;
	private String emailId;
	private String phoneNumber;
	
	
	public UserResponse() {
		super();
	}

	public UserResponse(int userId, String userName, String emailId, String phoneNumber) {
		super();
		this.userId = userId;
		this.userName = userName;
		this.emailId = emailId;
		this.phoneNumber = phoneNumber;
	}

	public int getUserId() {
		return userId;
	}


	public void setUserId(int userId) {
		this.userId = userId;
	}


	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getEmailId() {
		return emailId;
	}

	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}

	public String getPhoneNumber() {
		return phoneNumber;
	}

	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}
	

}
