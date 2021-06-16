import React, {useState} from 'react'
import { Container } from 'react-bootstrap'
import './SellerPage.css';
import Sidebar from '../../components/Sidebar';
import SellerNavBar from '../../components/sellerNavBar';
import { Route, Switch } from "react-router-dom";

//pages import 
import SellerPrevOrders from '../SellerPrevOrders/SellerPrevOrders';
import SellerDashboard from '../SellerDashboard/SellerDashboard';
import SellerProducts from '../SellerProducts/SellerProducts';
import SellerOrderStatus from '../SellerOrderStatus/SellerOrderStatus';



function SellerPage() {

    const [isDarkTheme, setIsDarkTheme] = useState(false);

    const handleTheme = () => {
         setIsDarkTheme(!isDarkTheme);
    }

    const bgColor = isDarkTheme ? "#121212" : "#EEEEEE"


    return (
        <div class="d-flex flex-row min-vh-100" >
            <div class="min-vh-100 d-xl-flex d-none flex-shrink-0" style={{ flex: 1, flexDirection: "column" }}>
                <Sidebar />
            </div>
            <div class="dashboard d-flex flex-shrink-1" style={{ flexDirection: "column", backgroundColor: bgColor }}>
                <SellerNavBar />
                <Container className="mt-xl-5" style={{ flex: 1 }}>
                <Switch>
                    <Route path="/seller/dashboard" render={() => <SellerDashboard />} />
                    <Route path="/seller/previousorders" render={() => <SellerPrevOrders handleTheme={handleTheme} isdarkTheme={isDarkTheme} />} />
                    <Route path="/seller/products" render={() => <SellerProducts />} />
                    <Route path="/seller/orderstatus" render={() => <SellerOrderStatus />} />
                </Switch>
                </Container>
            </div>
        </div>
    )
}

export default SellerPage
