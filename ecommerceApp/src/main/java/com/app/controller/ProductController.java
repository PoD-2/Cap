package com.app.controller;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.app.entity.Product;
import com.app.exception.NotFoundException;
import com.app.service.ProductService;

@CrossOrigin
@RestController
@RequestMapping("/product")
public class ProductController {
	
	@Autowired
	private ProductService productService;
	
	@GetMapping("/home")
	public ResponseEntity<ArrayList<Product>> home(@RequestParam String category) throws NotFoundException{
		return new ResponseEntity<ArrayList<Product>>(productService.findCategory(category),HttpStatus.OK);
	}
	
	@GetMapping("/search")
	public ResponseEntity<ArrayList<Product>> search(@RequestParam String search) throws NotFoundException{
		return new ResponseEntity<ArrayList<Product>>(productService.findCategoryOrProduct(search),HttpStatus.OK);
		
	}


}
