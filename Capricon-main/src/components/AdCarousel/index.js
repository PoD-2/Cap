import React from 'react'
import { Carousel } from "react-bootstrap";
import adPic1 from '../../images/ad1.png';
import adPic2 from '../../images/ad2.png';
import adPic3 from '../../images/ad3.png';
import './AdCarousel.css';

function AdCarousel() {
    return (
        <Carousel className="adCarousel shadow">
        <Carousel.Item>
            <img
                className="w-100 adImage"
                src={adPic1}
                alt="First slide"
                
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="d-block w-100 adImage"
                src={adPic2}
                alt="Second slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="d-block w-100 h-100 adImage"
                src={adPic3}
                alt="Third slide"
            />
        </Carousel.Item>
    </Carousel>
    )
}

export default AdCarousel
