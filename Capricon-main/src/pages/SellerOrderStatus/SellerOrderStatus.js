import React from 'react'
import OrderStatusCard from '../../components/OrderStatusCard';

function SellerOrderStatus() {
    return (
        <div>
            <h3 className="sellerPageTitle">Order Status</h3>
            <span className="LineSeperator mb-5" />
            <div style={{height: 700, overflow: "auto"}}>
            {/* <OrderStatusCard /> */}
            </div>
        </div>
    )
}

export default SellerOrderStatus
