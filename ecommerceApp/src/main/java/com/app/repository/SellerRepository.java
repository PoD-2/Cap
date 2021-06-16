package com.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.entity.Seller;

@Repository
public interface SellerRepository extends JpaRepository<Seller, Integer>{

	Seller findByEmailIdAndPassword(String emailId, String password);

	Seller findBySellerId(int sellerId);
	
	
}
