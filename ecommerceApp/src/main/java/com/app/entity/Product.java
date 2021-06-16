package com.app.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

import com.fasterxml.jackson.annotation.JsonBackReference;

@Entity
@Table(uniqueConstraints= {@UniqueConstraint(columnNames= {"productId","productName"})})
public class Product {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int productId;
	private String productName;
	private String category;
	private String color;
	private long price;
	private int qty;
	private String desc;
	@ManyToOne
	@JoinColumn(name="sellerId")
	private Seller seller;
	
	public Product() {
		super();
	}

	public Product(int productId, String productName, String category, String color, long price, int qty, String desc, Seller seller) {
		super();
		this.productId = productId;
		this.productName = productName;
		this.category = category;
		this.color = color;
		this.price = price;
		this.qty = qty;
		this.seller = seller;
		this.desc = desc;
		}

	public int getProductId() {
		return productId;
	}

	public void setProductId(int productId) {
		this.productId = productId;
	}

	public String getProductName() {
		return productName;
	}

	public void setProductName(String productName) {
		this.productName = productName;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public String getColor() {
		return color;
	}

	public void setColor(String color) {
		this.color = color;
	}

	public long getPrice() {
		return price;
	}

	public void setPrice(long price) {
		this.price = price;
	}

	public int getQty() {
		return qty;
	}

	public void setQty(int qty) {
		this.qty = qty;
	}
	@JsonBackReference
	public Seller getSeller() {
		return seller;
	}
	public void setSeller(Seller seller) {
		this.seller = seller;
	}

	public String getDesc() {
		return desc;
	}

	public void setDesc(String desc) {
		this.desc = desc;
	}	
	
}
