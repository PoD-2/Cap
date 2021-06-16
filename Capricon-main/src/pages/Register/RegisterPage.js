import React, { useState, useEffect } from 'react';
import { Button, Form, Container, Row, Col, Alert, Carousel } from "react-bootstrap";
import './Register.css';
import { formValidation as validate } from '../../services';
import { useDispatch, useSelector } from 'react-redux';
import { userActions, alertActions } from '../../redux/actions';

//assets import
import RegisterPic from '../../images/buyingOnline.gif';
import verifiedPic from '../../images/verified-pic.png';
import trackingPic from '../../images/liveTracking.png';
import Logo from '../../images/capcricon.png';


function RegisterPage() {

    const [name, setName] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [rememberChecked, setRememberChecked] = useState(false);
    const [carouselIndex, setCarouselIndex] = useState(0);
    

    //carousel index value
    const handleCarouselIndex = (selectedIndex, e) => {
        setCarouselIndex(selectedIndex);
    };
    
    //headline array
    const headLines = ["Buy and sell products online", "All products are genuine and verified", "Live tracking of shipment"];


    //redux integration
    const loggingIn = useSelector(state => state.userAuth.loading);
    const message = useSelector(state => state.alert.message);
    const alertType = useSelector(state => state.alert.type);
    const dispatch = useDispatch();


    //FORM VALIDATION:

    // if form is valid on submit, this function return true, else false

    function validateName() {
        return validate.nameValidation(submitted, name);
    }

    function validateMobileNumber() {
        return validate.mobileNumberValidation(submitted, mobileNumber);
    }

    function validatePassword() {
        return validate.passwordValidation(submitted, password);
    }

    function validateEmail() {
        return validate.emailValidation(submitted, email);
    }


    //check if remember checkbox is clicked
    const checkBoxClicked = (e) => {
        let isChecked = e.target.checked;
        setRememberChecked(isChecked);
    }


   //clear the alert
    useEffect(() => {
        setTimeout(
            function() {
             // clear alert after 3 secomds
             dispatch(alertActions.clear());
            }, 3000);
}, [alertType, dispatch]);



    //handle the submit event and call the register action
    function handleSubmit(event) {
        event.preventDefault();
        setSubmitted(true);
        if (name && mobileNumber && email && password && validatePassword() && validateMobileNumber()) {

            const user = { "userName": name, "phoneNumber": mobileNumber, "emailId": email, "password": password };
            dispatch(userActions.register(user, rememberChecked));
        }
    }

    return (
        <Container fluid>
                    {message && (
                        <Alert variant={(alertType === "alert-success") ? "success" : "danger"} >
                            {message}
                        </Alert>
                    )}
            <Row className="min-vh-100">
                <Col lg={6} className="d-lg-block d-none px-0">
                    <Carousel interval={4000} activeIndex={carouselIndex} onSelect={handleCarouselIndex}>
                        <Carousel.Item className="w-100 vh-100 d-flex justify-content-center align-items-center">
                            <img
                                className="d-block "
                                src={RegisterPic}
                                alt="First slide"
                                width="80%"
                                
                            />
                        </Carousel.Item>
                        <Carousel.Item >
                            <img
                                className="w-100 vh-100"
                                src={verifiedPic}
                                alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="w-100 vh-100"
                                src={trackingPic}
                                alt="Third slide"
                                width="80%"
                            />
                        </Carousel.Item>
                    </Carousel>
                </Col>
                <Col className="embedShado d-flex align-items-center justify-content-center flex-column" style={{ backgroundColor: "white" }}>
                    <a href="/"><img
                        src={Logo}
                        width="200"
                        height="120"
                        className="image"
                        alt="capricon logo"
                    /></a>

                    <Form className="registerForm" onSubmit={handleSubmit}>
                        <p className="font-weight-bold mt-4 mb-0" style={{ fontSize: 32 }}>Create Account</p>
                        <p className="font-weight-light mb-4 text-monospace text-muted" style={{ fontSize: 16, width: 380 }}>{headLines[carouselIndex] + "."}</p>
                        <Form.Group size="lg" controlId="name">
                            <Form.Control
                                autoFocus
                                type="text"
                                value={name}
                                placeholder="Enter your name"
                                className={'form-control' + (!validateName() && ' is-invalid')}
                                onChange={(e) => setName(e.target.value)}
                            />
                            {!validateName() &&
                                <div className="invalid-feedback">Name is required</div>
                            }
                        </Form.Group>
                        <Form.Group size="lg" controlId="mobileNumber">
                            <Form.Control
                                type="tel"
                                value={mobileNumber}
                                placeholder="Enter your mobile number"
                                className={'form-control' + (!validateMobileNumber() && ' is-invalid')}
                                onChange={(e) => setMobileNumber(e.target.value)}
                            />
                            {!validateMobileNumber() &&
                                <div className="invalid-feedback">Invalid mobile number</div>
                            }
                        </Form.Group>
                        <Form.Group size="lg" controlId="email">
                            <Form.Control
                                type="email"
                                value={email}
                                placeholder="Enter your email address"
                                className={'form-control' + (!validateEmail() && ' is-invalid')}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            {!validateEmail() &&
                                <div className="invalid-feedback">Invalid email</div>
                            }
                        </Form.Group>
                        <Form.Group size="lg" controlId="password">
                            <Form.Control
                                type="password"
                                value={password}
                                placeholder="Enter password"
                                className={'form-control' + (!validatePassword() && ' is-invalid')}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            {validatePassword() ? (
                                <Form.Text className="text-muted">
                                    Password must be minimum 8 characters
                                </Form.Text>
                            ) : (
                                <div className="invalid-feedback">Password must be minimum 8 characters</div>
                            )
                            }
                        </Form.Group>
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check onChange={e => checkBoxClicked(e)} type="checkbox" label="Remember me" checked={rememberChecked} />
                        </Form.Group>
                        <Button block size="lg" type="submit">
                            {loggingIn && <span className="spinner-grow spinner-grow-sm mr-1"></span>}
                           Sign Up
                        </Button>
                        <p className="font-weight-normal mt-5 mb-2" style={{ fontSize: 18 }}>Already have an account?</p>
                        <Button href="/login" block size="lg" variant="outline-dark">
                            Login
      </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default RegisterPage
