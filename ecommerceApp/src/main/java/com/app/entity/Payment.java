package com.app.entity;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Payment {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int paymentId;
	private Date paymentDate;
	private String accNo;
	private long amount;
	private String paymentType;
	private String status;
	
	public Payment() {
		super();
	}

	public Payment(Date paymentDate, String accNo, long amount, String paymentType, String status) {
		super();
		this.paymentDate = paymentDate;
		this.accNo = accNo;
		this.amount = amount;
		this.paymentType = paymentType;
		this.setStatus(status);
	}
	public int getPaymentId() {
		return paymentId;
	}
	public void setPaymentId(int paymentId) {
		this.paymentId = paymentId;
	}
	public Date getPaymentDate() {
		return paymentDate;
	}
	public void setPaymentDate(Date date) {
		this.paymentDate = date;
	}
	public String getAccNo() {
		return accNo;
	}
	public void setAccNo(String accNo) {
		this.accNo = accNo;
	}
	public long getAmount() {
		return amount;
	}
	public void setAmount(long amount) {
		this.amount = amount;
	}
	public String getPaymentType() {
		return paymentType;
	}
	public void setPaymentType(String paymentType) {
		this.paymentType = paymentType;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	
	

}
