package com.app.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.app.entity.Payment;
import com.app.exception.NotFoundException;
import com.app.repository.PaymentRepository;
import com.app.service.PaymentService;

@RestController
@RequestMapping("/payment")
public class PaymentController {
private PaymentService paymentService;
private PaymentRepository paymentRepository;
	
	public PaymentController(PaymentService paymentService, PaymentRepository paymentRepository) {
		super();
		this.paymentService = paymentService;
		this.paymentRepository=paymentRepository;
	}
	@PutMapping("/pay")
	public ResponseEntity<Payment> changeStatus(@RequestParam int id){
		return new ResponseEntity<Payment>(paymentService.changeStatus(id),HttpStatus.CREATED);
	}
	@GetMapping("/view")
	public ResponseEntity<Payment> view(@RequestParam int id) throws NotFoundException{
			Payment p=paymentRepository.findByPaymentId(id);
		if(p!=null)
		{
			return new ResponseEntity<Payment>(p,HttpStatus.FOUND);
		}
		else
		{
			throw new NotFoundException("Payment details Not Found");
		}
	}

}


