package com.app.entity;

import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;

@Entity
public class Booking {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int bookId;
	@OneToOne(cascade=CascadeType.DETACH)
	private User user;
	@OneToOne(cascade=CascadeType.DETACH)
	private Product product;
	@OneToOne(cascade=CascadeType.DETACH)
	private Seller seller;
	private int qty;
	private Date bookDate;
	private Date deliveryDate;
	@OneToOne(cascade=CascadeType.ALL)
	private Address billingAddress;
	@OneToOne(cascade=CascadeType.ALL)
	private Payment payment;
	private String status;
	
	
	
	public Booking() {
		super();
	}

	public Booking(User user, Product product, Seller seller, Date bookDate, Date deliveryDate, int qty,
			Payment payment, Address billingAddress, String status) {
		super();
		this.user = user;
		this.product = product;
		this.seller = seller;
		this.bookDate = bookDate;
		this.deliveryDate = deliveryDate;
		this.qty = qty;
		this.payment = payment;
		this.billingAddress=billingAddress;
		this.status=status;
	}

	public int getBookId() {
		return bookId;
	}
	public void setBookId(int bookId) {
		this.bookId = bookId;
	}
	public User getUser() {
		return user;
	}
	public void setUser(User user) {
		this.user = user;
	}
	public Product getProduct() {
		return product;
	}
	public void setProduct(Product product) {
		this.product = product;
	}
	public Seller getSeller() {
		return seller;
	}
	public void setSeller(Seller seller) {
		this.seller = seller;
	}
	public Date getBookDate() {
		return bookDate;
	}
	public void setBookDate(Date bookDate) {
		this.bookDate = bookDate;
	}
	public Date getDeliveryDate() {
		return deliveryDate;
	}
	public void setDeliveryDate(Date deliveryDate) {
		this.deliveryDate = deliveryDate;
	}
	public int getQty() {
		return qty;
	}
	public void setQty(int qty) {
		this.qty = qty;
	}
	public Address getBillingAddress() {
		return billingAddress;
	}

	public void setBillingAddress(Address billingAddress) {
		this.billingAddress = billingAddress;
	}
	public Payment getPayment() {
		return payment;
	}
	public void setPayment(Payment payment) {
		this.payment = payment;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}
	
	
	

}
