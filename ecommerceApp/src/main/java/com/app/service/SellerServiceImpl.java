package com.app.service;



import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;

import com.app.entity.Product;
import com.app.entity.Seller;
import com.app.exception.ExistingUserException;
import com.app.exception.UserNotFoundException;
import com.app.model.SellerResponse;
import com.app.repository.ProductRepository;
import com.app.repository.SellerRepository;

@Service
public class SellerServiceImpl implements SellerService {

	private SellerRepository sellerRepository;
	
	private ProductRepository productRepository;
	
	public SellerServiceImpl(SellerRepository sellerRepository, ProductRepository productRepository) {
		super();
		this.sellerRepository = sellerRepository;
		this.productRepository = productRepository;
	}

	@Override
	public SellerResponse register(Seller seller) throws ExistingUserException {
		try {
			sellerRepository.save(seller);
			return new SellerResponse(seller.getSellerId(), seller.getCompanyName(), seller.getCsEmailId(),
					seller.getCsPhoneNumber(), seller.getAddress(), seller.getProducts());

		} catch (DataIntegrityViolationException e) {
			throw new ExistingUserException("Seller Already Existing");
		}

	}

	@Override
	public SellerResponse validate(Seller seller) throws UserNotFoundException {
		Seller s = sellerRepository.findByEmailIdAndPassword(seller.getEmailId(), seller.getPassword());
		if (s != null) {
			return new SellerResponse(s.getSellerId(), s.getCompanyName(), s.getCsEmailId(), s.getCsPhoneNumber(),
					s.getAddress(), s.getProducts());
		} else {
			throw new UserNotFoundException("Seller Not Found");
		}
	}

	@Override
	public SellerResponse addProduct(int sellerId, Product product) throws ExistingUserException{
		try {
		Seller s = sellerRepository.findBySellerId(sellerId);
		s.addProduct(product);
		product.setSeller(s);
		sellerRepository.save(s);
		
		return new SellerResponse(s.getSellerId(), s.getCompanyName(), s.getCsEmailId(), s.getCsPhoneNumber(),
				s.getAddress(), s.getProducts());
		} catch (DataIntegrityViolationException e) {
			throw new ExistingUserException("Product Name Already Existing");
		}
	}

	@Override
	public SellerResponse viewProduct(int sellerId) {
		
		Seller s = sellerRepository.findBySellerId(sellerId);
		return new SellerResponse(s.getSellerId(), s.getCompanyName(), s.getCsEmailId(), s.getCsPhoneNumber(),
				s.getAddress(), s.getProducts());
		
	}

	@Override
	public SellerResponse changeQty(int sellerId, int productId, int qty) {
		
		Seller s = sellerRepository.findBySellerId(sellerId);
		Product p = productRepository.findByProductId(productId);
		p.setQty(qty);
		return new SellerResponse(s.getSellerId(), s.getCompanyName(), s.getCsEmailId(), s.getCsPhoneNumber(),
				s.getAddress(), s.getProducts());	
		
	}

}
