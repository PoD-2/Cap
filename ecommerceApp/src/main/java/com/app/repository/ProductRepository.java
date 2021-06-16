package com.app.repository;

import java.util.ArrayList;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.entity.Product;

@Repository
public interface ProductRepository extends JpaRepository<Product, Integer>{

	Product findByProductId(int productId);

	ArrayList<Product> findByCategoryContainingIgnoreCase(String category);

	ArrayList<Product> findByCategoryContainingOrProductNameContainingIgnoreCase(String s, String s1);

}
