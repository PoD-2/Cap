package com.app.entity;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
@Table(uniqueConstraints= {@UniqueConstraint(columnNames= {"sellerId","emailId"})})
public class Seller {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int sellerId;
	private String sellerName;
	private String companyName;
	private String emailId;
	private String csEmailId;
	private String password;
	private String phoneNumber;
	private String csPhoneNumber;
	@OneToOne(cascade=CascadeType.ALL)
	private Address address;
	@OneToMany(cascade=CascadeType.ALL, mappedBy="seller")
	private List<Product> products=new ArrayList<>();
	
	public Seller() {
		super();
	}

	public Seller(String sellerName, String companyName, String emailId, String csEmailId, String password,
			String phoneNumber, String csPhoneNumber, Address address, List<Product> products) {
		super();
		this.sellerName = sellerName;
		this.companyName = companyName;
		this.emailId = emailId;
		this.csEmailId = csEmailId;
		this.password = password;
		this.phoneNumber = phoneNumber;
		this.csPhoneNumber = csPhoneNumber;
		this.address = address;
		this.products = products;
	}

	public int getSellerId() {
		return sellerId;
	}

	public void setSellerId(int sellerId) {
		this.sellerId = sellerId;
	}

	public String getSellerName() {
		return sellerName;
	}

	public void setSellerName(String sellerName) {
		this.sellerName = sellerName;
	}

	public String getCompanyName() {
		return companyName;
	}

	public void setCompanyName(String companyName) {
		this.companyName = companyName;
	}

	public String getEmailId() {
		return emailId;
	}

	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}

	public String getCsEmailId() {
		return csEmailId;
	}

	public void setCsEmailId(String csEmailId) {
		this.csEmailId = csEmailId;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getPhoneNumber() {
		return phoneNumber;
	}

	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}

	public String getCsPhoneNumber() {
		return csPhoneNumber;
	}

	public void setCsPhoneNumber(String csPhoneNumber) {
		this.csPhoneNumber = csPhoneNumber;
	}

	public Address getAddress() {
		return address;
	}

	public void setAddress(Address address) {
		this.address = address;
	}

	@JsonManagedReference
	public List<Product> getProducts() {
		return products;
	}

	public void setProducts(List<Product> products) {
		this.products = products;
	}

	public void addProduct(Product product2) {
		this.products.add(product2);
		
	}
	

}
