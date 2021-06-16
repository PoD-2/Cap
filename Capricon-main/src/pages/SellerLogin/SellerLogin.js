import React, { useState, useEffect } from "react";
import { Button, Form, Alert } from "react-bootstrap";
import "./SellerLogin.css";
import Logo from '../../images/capcricon.png';
import { useDispatch, useSelector } from 'react-redux';
import { sellerActions, alertActions } from '../../redux/actions';
import { formValidation as validate } from '../../services';

export default function SellerLogin() {

    const [companyEmail, setCompanyEmail] = useState("");
    const [password, setPassword] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [rememberChecked, setRememberChecked] = useState(false);

    //redux integration
    const loggingIn = useSelector(state => state.sellerAuth.loading);
    const message = useSelector(state => state.alert.message);
    const alertType = useSelector(state => state.alert.type);
    const dispatch = useDispatch();


    //FORM VALIDATION:

    // if form is valid on submit, this function return true, else false
    function validatePassword() {
        return validate.passwordValidation(submitted, password);
    }

    function validateEmail() {
        return validate.emailValidation(submitted, companyEmail);
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
        if (companyEmail && password && validatePassword()) {
            const seller = { "emailId": companyEmail, "password": password };
            dispatch(sellerActions.login(seller, rememberChecked));
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
            <p className="font-weight-normal text-center mt-5" style={{ fontSize: 32 }}>Log In as Seller</p>
            <div className="Login">
                <Form onSubmit={handleSubmit}>
                    <Form.Group size="lg" controlId="email">
                        <Form.Label>Company Email</Form.Label>
                        <Form.Control
                            autoFocus
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
                    <Form.Group size="lg" controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            value={password}
                            placeholder="enter password"
                            className={'form-control' + (!validatePassword() && ' is-invalid')}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {!validatePassword() &&
                            <div className="invalid-feedback">password minimum 8 characters</div>
                        }

                    </Form.Group>
                    <div className="d-flex justify-content-between align-items-center flex-row">
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check onChange={e => checkBoxClicked(e)} type="checkbox" label="Remember me" checked={rememberChecked} />
                        </Form.Group>
                        <Button variant="link" className="pb-4 m-0" >Forgot password?</Button>
                    </div>
                    <Button block size="lg" type="submit">
                        {loggingIn && <span className="spinner-grow spinner-grow-sm mr-1"></span>}
                        Login as Seller
                    </Button>
                </Form>
                <p className="font-weight-normal mt-5 mb-2" style={{ fontSize: 22 }}>Not a seller at capricon yet??</p>
                <Button href="/seller/register" block size="lg" variant="outline-dark">
                    Sign Up as Seller
                </Button>
            </div>
        </>
    );
}