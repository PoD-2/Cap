package com.app.model;

import java.util.List;

import com.app.entity.Address;
import com.app.entity.Product;

public class SellerResponse {

	private int sellerId;
	private String companyName;
	private String csEmailId;
	private String csPhoneNumber;
	private Address address;
	private List<Product> products; 
	
	public SellerResponse() {
		super();
	}
	public SellerResponse(int sellerId, String companyName, String csEmailId, String csPhoneNumber, Address address) {
		super();
		this.sellerId = sellerId;
		this.companyName = companyName;
		this.csEmailId = csEmailId;
		this.csPhoneNumber = csPhoneNumber;
		this.address = address;
		
	}
	public SellerResponse(int sellerId, String companyName, String csEmailId, String csPhoneNumber, Address address, List<Product> products) {
		super();
		this.sellerId = sellerId;
		this.companyName = companyName;
		this.csEmailId = csEmailId;
		this.csPhoneNumber = csPhoneNumber;
		this.address = address;
		this.products=products;
	}
	public int getSellerId() {
		return sellerId;
	}
	public void setSellerId(int sellerId) {
		this.sellerId = sellerId;
	}
	public String getCompanyName() {
		return companyName;
	}
	public void setCompanyName(String companyName) {
		this.companyName = companyName;
	}
	public String getCsEmailId() {
		return csEmailId;
	}
	public void setCsEmailId(String csEmailId) {
		this.csEmailId = csEmailId;
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
	public List<Product> getProducts() {
		return products;
	}
	public void setProducts(List<Product> products) {
		this.products = products;
	}
	
	
}
