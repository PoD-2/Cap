package com.app.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Address {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int aId;
	private String line;
	private String city;
	private String pincode;
	private String state;
	private String country;
	
	
	
	public Address() {
		super();
	}

	public Address(String line, String city, String pincode, String state, String country) {
		super();
		this.line = line;
		this.city = city;
		this.pincode = pincode;
		this.state = state;
		this.country = country;
	}

	public int getaId() {
		return aId;
	}

	public void setaddrId(int aId) {
		this.aId = aId;
	}

	public String getLine() {
		return line;
	}

	public void setLine(String line) {
		this.line = line;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getPincode() {
		return pincode;
	}

	public void setPincode(String pincode) {
		this.pincode = pincode;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}
	
	

}
