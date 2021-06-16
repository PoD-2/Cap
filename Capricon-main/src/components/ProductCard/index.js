import React, { useState } from 'react'
import ReactCardFlip from 'react-card-flip';
import showImg from '../../images/shoeImg.jpeg'
import './ProductCard.css';
import { Carousel, Button } from "react-bootstrap";
import { IoBagAdd } from "react-icons/io5";


function ProductCard() {

  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div onMouseEnter={() => setIsFlipped(true)} onMouseLeave={() => setIsFlipped(false)}>
      <ReactCardFlip isFlipped={isFlipped}>
        <img
          src={showImg}
          alt=""
          className="cardImage shadow-lg mb-5 bg-white"
        />


        <div
          style={{ width: 250, height: 320, backgroundColor: "white", borderRadius: 15, overflow: "hidden" }}
          className="shadow-lg"
        >
        
          <Carousel className="shadow productCarousel" style={{ height: 150 }}>
            <Carousel.Item>
              <img
                src={showImg}
                alt="First slide"
                style={{ width: 250, height: 150, objectFit: "cover" }}

              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                style={{ width: 250, height: 150, objectFit: "cover" }}
                src={showImg}
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                style={{ width: 250, height: 150, objectFit: "cover" }}
                src={showImg}
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>

          <div style={{ padding: 10, textAlign: "center" }}>
            <a href="/login" className="m-0, p-0">
            <p className="productName" style={{fontWeight: 500}}>Jordan Delta 2</p>
            </a>
            <p className="text-muted text-monospace mb-1" style={{ fontSize: 20 }}>Nike Shoes</p>
            <div className="d-flex align-items-center">
            <p className="lead" style={{ fontSize: 32, flex: 1, paddingTop: 15}}>$299</p>

            <Button style={{flex: 1, borderRadius: 100, maxWidth: 60, margin: 10}} className="py-3" variant="dark">
            <IoBagAdd size={22} />
            </Button>

            </div>

          </div>

        </div>
      </ReactCardFlip>
    </div>
  )
}

export default ProductCard;
