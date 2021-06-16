package com.app.service;

import java.util.Date;

import org.springframework.stereotype.Service;

import com.app.entity.Booking;
import com.app.entity.Payment;
import com.app.entity.Product;
import com.app.repository.BookingRepository;
import com.app.repository.ProductRepository;
import com.app.repository.UserRepository;

@Service
public class BookingServiceImpl implements BookingService{

	private BookingRepository bookingRepository;
	
	private UserRepository userRepository;
	
	private ProductRepository productRepository;
	
	public BookingServiceImpl(BookingRepository bookingRepository, UserRepository userRepository,  ProductRepository productRepository) {
		super();
		this.bookingRepository = bookingRepository;
		this.userRepository=userRepository;
		this.productRepository=productRepository;
	}


	@Override
	public Booking book(Booking booking) {
		booking.setBookDate(new Date());
		booking.setUser(userRepository.findByUserId(booking.getUser().getUserId()));
		Product p=productRepository.findByProductId(booking.getProduct().getProductId());
		booking.setProduct(p);
		booking.setSeller(p.getSeller());
		Payment pay=booking.getPayment();
		pay.setPaymentDate(new Date());
		booking.setPayment(pay);
		Booking b=bookingRepository.save(booking);
		return b;
	}

}
