import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from "prop-types";
import { useSelector } from 'react-redux';

export default function RouteWrapper({component: Component, isPrivate, alwaysPublic, isSeller, isSellerPrivate, ...rest}) {
    
    
    const user = useSelector(state => state.userAuth.user);
    const seller = useSelector(state => state.sellerAuth.seller);

    const signed = user ? true : false;
    const sellerSigned = seller ? true : false;

    //Route is private and the user is not logged in
    if(isPrivate && !signed){
        return <Redirect to="/Login" />;
    }
    
    if(!alwaysPublic && !isPrivate && signed && !isSeller && !isSellerPrivate){
        return <Redirect to="/" />;
    }
    
    //seller url will be opened only when normal account is logged in
    if((isSeller || isSellerPrivate) && !signed){
        return <Redirect to="/login" />;
    }
    
    //if seller is logged in, it will redirect to dashboard when seller tries to access seller login or dashboard
    if(isSeller && signed && sellerSigned){
         return <Redirect to="/seller/dashboard" />;
    }

    if(isSellerPrivate && signed && !sellerSigned){
            return <Redirect to="/seller/login" />;
           }


    return <Route {...rest} component={Component} />;
}

RouteWrapper.propTypes = {
    isPrivate: PropTypes.bool,
    alwaysPublic: PropTypes.bool,
    isSeller: PropTypes.bool,
    isSellerPrivate: PropTypes.bool,
    component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired
};

RouteWrapper.defaultProps ={
    isPrivate: false,
    alwaysPublic: false,
    isSeller: false,
    isSellerPrivate: false
};




