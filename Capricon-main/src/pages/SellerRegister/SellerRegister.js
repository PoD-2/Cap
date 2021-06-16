import React, { useState, useEffect } from "react";
import { Button, Form, Alert, Col, Container } from "react-bootstrap";
import "./SellerRegister.css";
import Logo from '../../images/capcricon.png';
import { useDispatch, useSelector } from 'react-redux';
import { sellerActions, alertActions } from '../../redux/actions';
import { formValidation as validate } from '../../services';

export default function SellerRegister() {


    //redux integration
    const loggingIn = useSelector(state => state.sellerAuth.loading);
    const user = useSelector(state => state.userAuth.user);
    const message = useSelector(state => state.alert.message);
    const alertType = useSelector(state => state.alert.type);
    const dispatch = useDispatch();


    //state of this page
    const [sellerName, setSellerName] = useState(user ? user.userName : "");
    const [companyName, setCompanyName] = useState(user ? validate.checkForCompanyName(user.emailId) : "");
    const [companyEmail, setCompanyEmail] = useState(user ? user.emailId : "");
    const [csEmailId, setCsEmailId] = useState("");
    const [password, setPassword] = useState("");
    const [phoneNumber, setPhoneNumber] = useState(user ? user.phoneNumber : "");
    const [csPhoneNumber, setCsPhoneNumber] = useState("");
    const [address, setAddress] = useState(user ? user.address === undefined ? "" : user.address.addressline : "");
    const [city, setCity] = useState(user ? user.address === undefined ? "" : user.address.city : "");
    const [state, setState] = useState(user ? user.address === undefined ? "" : user.address.state : "");
    const [country, setCountry] = useState(user ? user.address  === undefined ? "" : user.address.country : "");
    const [pincode, setPincode] = useState(user ? user.address === undefined ? "" : user.address.pinCode : "");
    const [submitted, setSubmitted] = useState(false);
    const [rememberChecked, setRememberChecked] = useState(false);







    //FORM VALIDATION:

    // if form is valid on submit, this function return true, else false
    function validatePassword() {
        return validate.passwordValidation(submitted, password);
    }

    function validateEmail() {
        return validate.emailValidation(submitted, companyEmail);
    }

    function sellerNameValidation() {
        return validate.nameValidation(submitted, sellerName);
    }

    function companyNameValidation() {
        return validate.nameValidation(submitted, companyName);
    }

    function validateCsEmail() {
        return validate.emailValidation(submitted, csEmailId);
    }

    function validatePhoneNumber() {
        return validate.mobileNumberValidation(submitted, phoneNumber);
    }

    function validateCSPhoneNumber() {
        return validate.mobileNumberValidation(submitted, csPhoneNumber);
    }

    function validateAddress() {
        return validate.nameValidation(submitted, address);
    }

    function validateCity() {
        return validate.nameValidation(submitted, city);
    }

    function validateState() {
        return validate.nameValidation(submitted, state);
    }

    function validateCountry() {
        return validate.nameValidation(submitted, country);
    }

    function validateZipCode() {
        return validate.zipcodeValidation(submitted, pincode);
    }

    function checkAllValidity(){
        if(validatePassword() && validateEmail() && sellerNameValidation() && companyNameValidation() 
        && validateCsEmail() && validatePhoneNumber() && validateCSPhoneNumber() && validateAddress() 
        && validateCity() && validateState() && validateCountry() && validateZipCode()){
            return true;
        }
        return false;
    }


    //check if remember checkbox is clicked
    const checkBoxClicked = (e) => {
        let isChecked = e.target.checked;
        setRememberChecked(isChecked);
    }


    function handleSubmit(event) {
        event.preventDefault();
        setSubmitted(true);

        //dispatch only if input fields have value and also password is 8 charachters min
        if (checkAllValidity() && submitted) {
            const seller = { sellerName, companyName, "emailId": companyEmail, csEmailId, password, phoneNumber, csPhoneNumber, "address": {"line": address, city, pincode, state, country}};
            dispatch(sellerActions.register(seller, rememberChecked));

        }
    }

    //clear the alert
    useEffect(() => {
        setTimeout(
            function () {
                // clear alert after 3 secomds
                dispatch(alertActions.clear());
            }, 3000);

    }, [alertType, dispatch]);



    return (
        <>
            {message && (
                <Alert variant={(alertType === "alert-success") ? "success" : "danger"} >
                    {message}
                </Alert>
            )}
            <div className="d-flex justify-content-center mt-5">
                <a href="/"><img
                    src={Logo}
                    width="200"
                    height="120"
                    className="image"
                    alt="capricon logo"
                /></a>
            </div>
            <p className="font-weight-bold text-center mt-4 mb-0" style={{ fontSize: 32 }}>Register</p>
            <div className="">
                <Container>
                    <p className="text-center text-muted text-monospace mb-5" style={{ fontSize: 22 }}>Become a Seller</p>
                    <Form onSubmit={handleSubmit}>

                        <Form.Row>
                            <Form.Group as={Col} md={4} controlId="formGridName">
                                <Form.Label>Seller Name</Form.Label>
                                <Form.Control
                                    autoFocus
                                    type="text"
                                    value={sellerName}
                                    placeholder="Your name"
                                    className={'form-control' + (!sellerNameValidation() && ' is-invalid')}
                                    onChange={(e) => setSellerName(e.target.value)}
                                />
                                {!sellerNameValidation() &&
                                    <div className="invalid-feedback">Name is required</div>
                                }

                            </Form.Group>
                            <Form.Group as={Col} md={4} controlId="formGridCompanyName">
                                <Form.Label>Company Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={companyName}
                                    placeholder="Your company name"
                                    className={'form-control' + (!companyNameValidation() && ' is-invalid')}
                                    onChange={(e) => setCompanyName(e.target.value)}
                                />
                                {!companyNameValidation() &&
                                    <div className="invalid-feedback">Company Name is required</div>
                                }

                            </Form.Group>
                            <Form.Group as={Col} md={4} controlId="formGridEmail">
                                <Form.Label>Company Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    value={companyEmail}
                                    placeholder="mail@company.com"
                                    className={'form-control' + (!validateEmail() && ' is-invalid')}
                                    onChange={(e) => setCompanyEmail(e.target.value)}
                                />
                                {!validateEmail() &&
                                    <div className="invalid-feedback">Email is required</div>
                                }

                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col} md={4} controlId="formGridCsEmail">
                                <Form.Label>Customer support email</Form.Label>
                                <Form.Control
                                    type="email"
                                    value={csEmailId}
                                    placeholder="cs@yourcompany.com"
                                    className={'form-control' + (!validateCsEmail() && ' is-invalid')}
                                    onChange={(e) => setCsEmailId(e.target.value)}
                                />
                                {!validateCsEmail() &&
                                    <div className="invalid-feedback">Customer support email is required</div>
                                }

                            </Form.Group>
                            <Form.Group as={Col} md={4} controlId="formGridPhoneNumber">
                                <Form.Label>Phone Number</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={phoneNumber}
                                    placeholder="Your company phone number"
                                    className={'form-control' + (!validatePhoneNumber() && ' is-invalid')}
                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                />
                                {!validatePhoneNumber() &&
                                    <div className="invalid-feedback">Phone Number is required</div>
                                }

                            </Form.Group>
                            <Form.Group as={Col} md={4} controlId="formGridCcPhoneNumber">
                                <Form.Label>Customer support phone number</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={csPhoneNumber}
                                    placeholder="CS phone number"
                                    className={'form-control' + (!validateCSPhoneNumber() && ' is-invalid')}
                                    onChange={(e) => setCsPhoneNumber(e.target.value)}
                                />
                                {!validateCSPhoneNumber() &&
                                    <div className="invalid-feedback">CS phone number is required</div>
                                }

                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                        <Form.Group as={Col} md={4} controlId="password">
                        <Form.Label>Password</Form.Label>
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
                            <Form.Group as={Col} md={8} controlId="formGridAddress">
                                <Form.Label>Address line</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={address}
                                    placeholder="Company address"
                                    className={'form-control' + (!validateAddress() && ' is-invalid')}
                                    onChange={(e) => setAddress(e.target.value)}
                                />
                                {!validateAddress() &&
                                    <div className="invalid-feedback">Address is required</div>
                                }

                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col} md={3} controlId="formGridCity">
                                <Form.Label>City</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={city}
                                    placeholder="Company city name"
                                    className={'form-control' + (!validateCity() && ' is-invalid')}
                                    onChange={(e) => setCity(e.target.value)}
                                />
                                {!validateCity() &&
                                    <div className="invalid-feedback">City name is required</div>
                                }

                            </Form.Group>
                            <Form.Group as={Col} md={3} controlId="formGridState">
                                <Form.Label>State</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={state}
                                    placeholder="Company state name"
                                    className={'form-control' + (!validateState() && ' is-invalid')}
                                    onChange={(e) => setState(e.target.value)}
                                />
                                {!validateState() &&
                                    <div className="invalid-feedback">State name is required</div>
                                }

                            </Form.Group>
                            <Form.Group as={Col} md={3} controlId="formGridCountry">
                                <Form.Label>Country</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={country}
                                    placeholder="Company country name"
                                    className={'form-control' + (!validateCountry() && ' is-invalid')}
                                    onChange={(e) => setCountry(e.target.value)}
                                />
                                {!validateCountry() &&
                                    <div className="invalid-feedback">Country name is required</div>
                                }

                            </Form.Group>
                            <Form.Group as={Col} md={3} controlId="formGridZipCode">
                                <Form.Label>ZipCode</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={pincode}
                                    maxLength={6}
                                    placeholder="Company pincode"
                                    className={'form-control' + (!validateZipCode() && ' is-invalid')}
                                    onChange={(e) => setPincode(e.target.value)}
                                />
                                {!validateZipCode() &&
                                    <div className="invalid-feedback">Pincode is required</div>
                                }

                            </Form.Group>
                        </Form.Row>



                        <div className="d-flex justify-content-between align-items-center flex-row RegisterButton">
                            <Form.Group controlId="formBasicCheckbox">
                                <Form.Check onChange={e => checkBoxClicked(e)} type="checkbox" label="Remember me" checked={rememberChecked} />
                            </Form.Group>
                            <Button variant="link" className="pb-4 m-0" >Forgot password?</Button>
                        </div>
                        <Button block type="submit" className="RegisterButton">
                            {loggingIn && <span className="spinner-grow spinner-grow-sm mr-1"></span>}
                            Register as a Seller
                        </Button>
                    </Form>
                    <p className="font-weight-normal mt-5 mb-2 RegisterButton" style={{ fontSize: 22 }}>Already a seller at capricon?</p>
                    <Button className="RegisterButton mb-5" href="/seller/login" block variant="outline-dark">
                        Login as a Seller
                    </Button>
                </Container>
            </div>
        </>
    );
}