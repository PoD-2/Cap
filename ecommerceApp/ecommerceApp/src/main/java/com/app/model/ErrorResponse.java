package com.app.model;

import java.util.Date;

public class ErrorResponse {

	private Date timeStamp;
	private int httpStatusCode;
	private String reason;
	private String message;
	
	public ErrorResponse() {
		super();
	}
	
	public ErrorResponse(Date timeStamp, int httpStatusCode, String reason, String message) {
		super();
		this.timeStamp = timeStamp;
		this.httpStatusCode = httpStatusCode;
		this.reason = reason;
		this.message = message;
	}

	public Date getTimeStamp() {
		return timeStamp;
	}
	public void setTimeStamp(Date timeStamp) {
		this.timeStamp = timeStamp;
	}
	public int getHttpStatusCode() {
		return httpStatusCode;
	}
	public void setHttpStatusCode(int httpStatusCode) {
		this.httpStatusCode = httpStatusCode;
	}
	public String getReason() {
		return reason;
	}
	public void setReason(String reason) {
		this.reason = reason;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	
	
}
