package com.app.service;

import com.app.entity.Booking;
import com.app.exception.NotFoundException;

public interface BookingService {

	Booking book(Booking booking) throws NotFoundException;
	
	Booking changeStatus(int id, String status);

}
