import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import './Footer.css';

function Footer() {
    return (
        <Container fluid className="d-flex flex-column justify-content-between" style={{height: 400, backgroundColor: "black", marginTop: 100}}>
        <Row className="mt-5">
            <Col md={{span: 5, offset: 2}}>
            <p className="text-white m-0 p-0" style={{fontSize: 44, fontWeight: 400, fontFamily: "Cinzel"}}>Capricon</p>
            <p className="text-white ml-1">Chennai, India</p>
            </Col>
            <Col md={{span: 2, offset: 1}}>
            <p className="footerHeader">Navigate</p>
            <a href="/cart" style={{textDecoration: "none"}} className="text-white"><p>Cart</p></a>
            <a href="/wishlist" style={{textDecoration: "none"}} className="text-white"><p>Wishlist</p></a>
            <a href="/seller/login" style={{textDecoration: "none"}} className="text-white"><p>Become a Seller</p></a>
            </Col>
            <Col md={2}>
            <p className="footerHeader">Contact Us</p>
            <p className="text-white mb-2">+91 9982122826</p>
            <p className="text-white">contact@capricon.com</p>
            </Col>
        </Row>
        <Row>
        <Col sm={{span: 6, offset: 5}}>
        <FaFacebookF size={24} className="text-white" />
        <FaInstagram size={24} className="mx-5 text-white" />
        <FaTwitter size={24} className="mr-5 text-white" />
        <FaLinkedinIn size={24} className="text-white" /> 
        </Col>
        </Row>
        <Row>
            <Col>
            <p className="text-muted text-monospace" style={{textAlign: "center"}}>Capricon Private Limited Copyright 2021 | All Rights Reserved</p>
            </Col>
        </Row>
        </Container>
    )
}

export default Footer
