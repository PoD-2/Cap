import React from 'react'
import './ProductSearch.css'

function ProductSearch(props) {
    return (
        <div className="productContainer d-flex align-items-center w-100">
        <p className="productSearchName m-0">{props.productName}</p>
        <span>in {props.category}</span>
        </div>
    )
}

export default ProductSearch
