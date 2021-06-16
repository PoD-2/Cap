package com.app.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.app.entity.Product;
import com.app.entity.Seller;
import com.app.exception.ExistingUserException;
import com.app.exception.UserNotFoundException;
import com.app.model.SellerResponse;
import com.app.service.SellerService;

@CrossOrigin
@RestController
@RequestMapping("/seller")
public class SellerController {

	private SellerService sellerService;

	public SellerController(SellerService sellerService) {
		super();
		this.sellerService = sellerService;
	}

	@PostMapping("/register")
	public ResponseEntity<SellerResponse> registration(@RequestBody Seller seller) throws ExistingUserException{
		return new ResponseEntity<SellerResponse>(sellerService.register(seller), HttpStatus.CREATED);
	}
	
	@PostMapping("/login")
	public ResponseEntity<SellerResponse> login(@RequestBody Seller seller) throws UserNotFoundException{
		return new ResponseEntity<SellerResponse>(sellerService.validate(seller),HttpStatus.OK);
	}

	@PostMapping("/{sellerId}/addProduct")
	public ResponseEntity<SellerResponse> addProduct(@PathVariable int sellerId, @RequestBody Product product) throws ExistingUserException{
		
		return new ResponseEntity<SellerResponse>(sellerService.addProduct(sellerId, product), HttpStatus.CREATED) ;
	}
	
	@GetMapping("/{sellerId}/viewProduct")
    public ResponseEntity<SellerResponse> viewProduct(@PathVariable int sellerId){
		
		return new ResponseEntity<SellerResponse>(sellerService.viewProduct(sellerId), HttpStatus.OK) ;
	}
	
	@PutMapping("/{sellerId}/{productId}/changeQty")
    public ResponseEntity<SellerResponse> changeQty(@PathVariable int sellerId, @PathVariable int productId, @RequestParam int qty){
		
		return new ResponseEntity<SellerResponse>(sellerService.changeQty(sellerId,productId,qty), HttpStatus.OK) ;
	}
	
	
}
