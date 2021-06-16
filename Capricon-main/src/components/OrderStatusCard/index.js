import React from 'react'
import { Image } from 'react-bootstrap';
import ProductPic from '../../images/shoeImg.jpeg'

function OrderStatusCard() {
    return (
        <div className="d-flex" style={{borderRadius: 5, flexDirection: "row"}}>
           <div className="d-flex" style={{flex: 1, flexDirection: "row"}}>
           <Image src={ProductPic} className="p-1" style={{width: 150, borderRadius: 10}} fluid />
           <div className="p-3">
           <h5>Jordan Delta 2</h5>
           <p>Nike</p>
           </div>
           </div>
           <div style={{flex: 1}}>
           <Image src={ProductPic} className="p-1" style={{width: 150, borderRadius: 10}} fluid />
           </div>
        </div>
    )
}

export default OrderStatusCard
