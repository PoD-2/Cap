import React from 'react';

import { Switch, BrowserRouter } from "react-router-dom";
import Route from "./Route";


//pages import
import HomePage from '../pages/Home/HomePage';
import CartPage from '../pages/Cart/CartPage';
import LoginPage from '../pages/Login/LoginPage';
import RegisterPage from '../pages/Register/RegisterPage';
import ErrorPage from '../pages/SystemPages/ErrorPage';
import WishList from '../pages/WishList/WishList';
import SellerLogin from '../pages/SellerLogin/SellerLogin';
import SellerRegister from '../pages/SellerRegister/SellerRegister';
import SellerPage from '../pages/SellerPage/SellerPage';


function Routes() {
    return (
        <BrowserRouter>
        <Switch>
        <Route path="/" exact component={HomePage} alwaysPublic />
        <Route path="/cart" component={CartPage} isPrivate />
        <Route path="/login" component={LoginPage}  />
        <Route path="/register" component={RegisterPage} />
        <Route path="/wishlist" component={WishList} isPrivate />
        <Route path="/seller/login" component={SellerLogin} isSeller/>
        <Route path="/seller/register" component={SellerRegister} isSeller/>
        <Route path="/seller" component={SellerPage} isSellerPrivate/>
        <Route component={ErrorPage} />
        </Switch>
        </BrowserRouter>
    )
}

export default Routes
