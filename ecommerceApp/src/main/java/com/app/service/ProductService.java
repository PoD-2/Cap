package com.app.service;

import java.util.ArrayList;

import com.app.entity.Product;
import com.app.exception.NotFoundException;

public interface ProductService {

	ArrayList<Product> findCategory(String category) throws NotFoundException;

	ArrayList<Product> findCategoryOrProduct(String s) throws NotFoundException;

}
