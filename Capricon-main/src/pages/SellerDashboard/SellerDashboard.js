import React from 'react'
import ChartistGraph from "react-chartist";
import './SellerDashboard.css';
import { FiCodesandbox } from "react-icons/fi";
import { IoIosCash } from "react-icons/io";

// react-bootstrap components
import {
    Card,
    Container,
    Row,
    Col
} from "react-bootstrap";

function SellerDashboard() {
    return (
        <div>
            <h2 className="display-4 mb-4">Nike, Inc.</h2>
            <h3 className="sellerPageTitle">Dashboard</h3>
            <span className="LineSeperator mb-3" />
            <>
                <Container fluid>
                    <Row>
                        <Col lg="6">
                            <Card className="card-stats my-5 shadow">
                                <Card.Body className="">
                                    <Row>
                                        <Col xs="6">
                                            <div className="text-center">
                                            <FiCodesandbox className="pr-2 pb-1 Sidebar-nav-link-icon" size={84} /> 
                                            </div>
                                        </Col>
                                        <Col xs="6">
                                            <div className="text-right">
                                                <p className="card-category">Total Sales</p>
                                                <Card.Title as="h4">150 Products</Card.Title>
                                            </div>
                                        </Col>
                                    </Row>
                                </Card.Body>
                                <Card.Footer className="">
                                    <div className="stats">
                                        <i className="fas fa-redo mr-1"></i>
                                       Till this month
                                    </div>
                                </Card.Footer>
                            </Card>
                        </Col>
                        <Col lg="6">
                            <Card className="card-stats my-5 shadow">
                                <Card.Body className="">
                                    <Row>
                                        <Col xs="6">
                                            <div className="text-center">
                                                <IoIosCash className="pr-2 pb-1 Sidebar-nav-link-icon" size={84} />
                                            </div>
                                        </Col>
                                        <Col xs="6">
                                            <div className="text-right">
                                                <p className="card-category">Total Revenue</p>
                                                <Card.Title as="h4">$ 1,245</Card.Title>
                                            </div>
                                        </Col>
                                    </Row>
                                </Card.Body>
                                <Card.Footer>
                                    <div className="stats">
                                        <i className="far fa-calendar-alt mr-1"></i>
                                        Till this month
                                    </div>
                                </Card.Footer>
                            </Card>
                        </Col>
                    </Row>
                   
                    <Row>
                        <Col md="12">
                            <Card className="shadow">
                                <Card.Header>
                                    <Card.Title as="h4">Overall Sales</Card.Title>
                                    <p className="card-category">Sales for all products for the whole year</p>
                                </Card.Header>
                                <Card.Body>
                                    <div className="ct-chart" id="chartActivity">
                                        <ChartistGraph
                                            data={{
                                                labels: [
                                                    "Jan",
                                                    "Feb",
                                                    "Mar",
                                                    "Apr",
                                                    "Mai",
                                                    "Jun",
                                                    "Jul",
                                                    "Aug",
                                                    "Sep",
                                                    "Oct",
                                                    "Nov",
                                                    "Dec",
                                                ],
                                                series: [
                                                    [
                                                        542,
                                                        443,
                                                        320,
                                                        780,
                                                        553,
                                                        453,
                                                        326,
                                                        434,
                                                        568,
                                                        610,
                                                        756,
                                                        895,
                                                    ]
                                                ],
                                            }}
                                            type="Bar"
                                            options={{
                                                seriesBarDistance: 10,
                                                axisX: {
                                                    showGrid: false,
                                                },
                                                height: "245px",
                                            }}
                                            responsiveOptions={[
                                                [
                                                    "screen and (max-width: 640px)",
                                                    {
                                                        seriesBarDistance: 5,
                                                        axisX: {
                                                            labelInterpolationFnc: function (value) {
                                                                return value[0];
                                                            },
                                                        },
                                                    },
                                                ],
                                            ]}
                                        />
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                      
                    </Row>
                </Container>
            </>
        </div>
    )
}

export default SellerDashboard
