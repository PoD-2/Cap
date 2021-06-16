import React, { useEffect } from 'react';
import NavBar from '../../components/NavBar';
import AdCarousel from '../../components/AdCarousel';
import ProductCard from '../../components/ProductCard';
import Footer from '../../components/Footer/Footer';
import { alertActions } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import './Home.css';
import { Col, Row, Container, Alert } from 'react-bootstrap';

function HomePage() {


    const message = useSelector(state => state.alert.message);
    const alertType = useSelector(state => state.alert.type);
    const dispatch = useDispatch();

       //clear the alert
   useEffect(() => {
    setTimeout(
        function() {
         // clear alert after 3 secomds
         dispatch(alertActions.clear());
        }, 3000);

}, [alertType, dispatch]);


    return (
        <div>
            {message && (
                <Alert variant={(alertType === "alert-success") ? "success" : "danger"} >
                    {message}
                </Alert>
            )}
            <NavBar />
            <div>
                <AdCarousel />
                <Container fluid className="px-5">
                    <h3 className="mt-5 mb-4" style={{ fontFamily: "Lato-Regular", fontSize: 45 }}>Deals of the day</h3>
                    <Row>
                        <Col>
                            <ProductCard />
                        </Col>
                        <Col>
                            <ProductCard />
                        </Col>
                        <Col>
                            <ProductCard />
                        </Col>
                        <Col>
                            <ProductCard />
                        </Col>
                        <Col>
                            <ProductCard />
                        </Col>
                        <Col>
                            <ProductCard />
                        </Col>
                    </Row>
                    <h3 className="mt-5 mb-3 display-4">Home Appliances</h3>
                    <Row>
                        <Col>
                            <ProductCard />
                        </Col>
                        <Col>
                            <ProductCard />
                        </Col>
                        <Col>
                            <ProductCard />
                        </Col>
                        <Col>
                            <ProductCard />
                        </Col>
                        <Col>
                            <ProductCard />
                        </Col>
                        <Col>
                            <ProductCard />
                        </Col>
                    </Row>
                    <h3 className="mt-5 mb-3 display-4">Home Appliances</h3>
                    <Row>
                        <Col>
                            <ProductCard />
                        </Col>
                        <Col>
                            <ProductCard />
                        </Col>
                        <Col>
                            <ProductCard />
                        </Col>
                        <Col>
                            <ProductCard />
                        </Col>
                        <Col>
                            <ProductCard />
                        </Col>
                        <Col>
                            <ProductCard />
                        </Col>
                    </Row>
                    <h3 className="mt-5 mb-5 display-4">Home Appliances</h3>
                    <Row>
                        <Col>
                            <ProductCard />
                        </Col>
                        <Col>
                            <ProductCard />
                        </Col>
                        <Col>
                            <ProductCard />
                        </Col>
                        <Col>
                            <ProductCard />
                        </Col>
                        <Col>
                            <ProductCard />
                        </Col>
                        <Col>
                            <ProductCard />
                        </Col>
                    </Row>
                </Container>
                <Footer />
            </div>
        </div>

    )
}

export default HomePage
