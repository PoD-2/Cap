import React from 'react';
import { Row, Col, Image, Button } from 'react-bootstrap'
import './WishlistCard.css';



function WishlistCard(props) {
   
    const alignstyle = props.align === "left" ? (
            {
        "container": {marginTop: 200},
        "imageContainerAlignment": {span: 5, offset: 1},
        "imageContainerClassName": "p-0 image order-md-1",
        "textContainerAlignment": {span: 6, offset: 0},
        "textContainerClassName": "order-md-2",
        "productNameClassName": "display-4 productName ml-3",
        "companyNameClassName": "text-muted text-monospace ml-4 mb-1",
        "priceClassName": "ml-4"
            }
        ) : (
            {
            "container": {marginTop: 200, textAlign: "right" },
            "imageContainerAlignment": { span: 5, offset: 0 },
            "imageContainerClassName": "p-0 image order-md-2",
            "textContainerAlignment": {span: 6, offset: 1},
            "textContainerClassName": "order-md-1",
            "productNameClassName": "display-4 productName mr-4",
            "companyNameClassName": "text-muted text-monospace mr-4 mb-1",
            "priceClassName": "mr-4"
            }
        );
    

    return (
        <Row style={alignstyle.container}>
                    <Col md={alignstyle.imageContainerAlignment} className={alignstyle.imageContainerClassName}>
                        
                    {/* <img src={props.productPic} width={475} height={500} alt="lol"/> */}
                    <Image src={props.productPic} fluid thumbnail />
                        <div
                            className="delete"
                            type="button"
                            onClick={() => props.handleImageDelete()}
                        >
                        <p style={{textAlign: "center"}}>X</p>
                        </div>
                    </Col>
                    <Col md={alignstyle.textContainerAlignment} className={alignstyle.textContainerClassName}>
                        <p className={alignstyle.productNameClassName}>{props.productName}</p>
                        <p className={alignstyle.companyNameClassName} style={{ fontSize: 28 }}>{props.productCompany}</p>
                        <p className={alignstyle.priceClassName} style={{ fontSize: 34 }}>At {props.price}</p>
                        <div className="d-flex">
                        <Button variant="secondary" className="mx-2 mt-2" size="lg" block>Buy Now</Button>
                        <Button variant="outline-dark" className="mx-2 mt-2" size="lg" block>Add to cart</Button>
                        </div>
                    </Col>
                </Row>
    )
}

export default WishlistCard
