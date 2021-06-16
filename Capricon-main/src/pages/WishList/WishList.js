import React from 'react'
import { Container } from 'react-bootstrap'
import NavBar from '../../components/NavBar';
import productPic from '../../images/shoeImg.jpeg';
import product2 from '../../images/product2.jpeg';
import product3 from '../../images/product3.jpeg';
import product4 from '../../images/product4.jpeg';
import Footer from '../../components/Footer/Footer';
import WishlistCard from '../../components/WishlistCard';
import './WishList.css'

function WishList() {


    function handleImageDelete() {
         console.log("hii")
    }

    return (
        <>
            <NavBar />
            <Container style={{ marginTop: 200 }}>
                <p className="display-1 mb-0">Wishlist</p>
                <p className="text-muted text-monospace ml-5" style={{letterSpacing: 8}} >Your favourite collection</p>
                <WishlistCard
                    align="left"
                    productId={1} 
                    productPic={productPic}
                    productName="Jordan Delta 2"
                    productCompany = "Nike"
                    price="$29"
                    handleImageDelete={handleImageDelete}
                />
                <WishlistCard 
                    align="right"
                    productId={1} 
                    productPic={product2}
                    productName="Green shirt"
                    productCompany = "Levi's"
                    price="$19"
                    handleImageDelete={handleImageDelete}
                />
                <WishlistCard 
                    align="left"
                    productId={1} 
                    productPic={product3}
                    productName="Stainless Steel Watch"
                    productCompany = "Fossil"
                    price="$89"
                    handleImageDelete={handleImageDelete}
                />
                <WishlistCard 
                    align="right"
                    productId={1} 
                    productPic={product4}
                    productName="Sony M3 smart phone"
                    productCompany = "Sony"
                    price="$109"
                    handleImageDelete={handleImageDelete}
                />
            </Container>
            <Footer />
        </>
    )
}

export default WishList
