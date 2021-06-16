package com.app.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

@Entity
@Table(uniqueConstraints= {@UniqueConstraint(columnNames= {"userId","emailId"})})
public class User {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int userId;
	private String userName;
	private String password;
	private String emailId;
	private String phoneNumber;
	
	public User() {
		
	}

	public User(String emailId, String password) {
		super();
		this.password = password;
		this.emailId = emailId;
	}

	public User(String userName, String emailId, String password, String phoneNumber) {
		super();
		this.userName = userName;
		this.password = password;
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

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
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
