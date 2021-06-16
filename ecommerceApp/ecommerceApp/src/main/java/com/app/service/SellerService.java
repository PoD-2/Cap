package com.app.service;

import com.app.entity.Product;
import com.app.entity.Seller;
import com.app.exception.ExistingUserException;
import com.app.exception.UserNotFoundException;
import com.app.model.SellerResponse;

public interface SellerService {

	SellerResponse register(Seller seller) throws ExistingUserException;
	
	SellerResponse validate(Seller seller) throws UserNotFoundException;

	SellerResponse addProduct(int sellerId, Product product) throws ExistingUserException;

	SellerResponse viewProduct(int sellerId);

	SellerResponse changeQty(int sellerId, int productId, int qty);
}
