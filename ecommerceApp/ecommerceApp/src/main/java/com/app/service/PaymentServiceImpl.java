package com.app.service;

import org.springframework.stereotype.Service;

import com.app.entity.Payment;



import com.app.repository.PaymentRepository;

@Service
public class PaymentServiceImpl implements PaymentService{
	private PaymentRepository paymentRepository;

	public PaymentServiceImpl(PaymentRepository paymentRepository) {
		super();
		this.paymentRepository = paymentRepository;
	}

	@Override
	public Payment changeStatus(int id){
		
		Payment p= paymentRepository.findByPaymentId(id);
		p.setStatus("Paid");
		return p;
		
	}

}
