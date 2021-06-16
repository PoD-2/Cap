package com.app.service;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.entity.Product;
import com.app.exception.NotFoundException;
import com.app.repository.ProductRepository;

@Service
public class ProductServiceImpl implements ProductService {
	
	@Autowired
	private ProductRepository productRepository;

	@Override
	public ArrayList<Product> findCategory(String category) throws NotFoundException {
		ArrayList<Product> p= productRepository.findByCategoryContainingIgnoreCase(category);
		if(!p.isEmpty())
			return p;
		else
			throw new NotFoundException("Product Not Found");
		
	}

	@Override
	public ArrayList<Product> findCategoryOrProduct(String s) throws NotFoundException {
		ArrayList<Product> p= productRepository.findByCategoryContainingOrProductNameContainingIgnoreCase(s,s);
		if(!p.isEmpty())
			return p;
		else
			throw new NotFoundException("Product Not Found");
		
	}

}
