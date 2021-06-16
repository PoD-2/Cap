// import config from 'config';
const axios = require('axios');
const baseURL = "http://localhost:8080"

export const sellerService = {
    login,
    logout,
    register
};



function login(seller, remember) {
  
    return axios.post(`${baseURL}/seller/login`, seller)
    .then(seller => {
        
        if(remember){
            localStorage.setItem('seller', JSON.stringify(seller.data));
        } else {
            sessionStorage.setItem("seller", JSON.stringify(seller.data));
        }
        
        return seller.data;
    })
    .catch(err => {
        return Promise.reject(err.response.data.message);
    })

}


function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('seller');
}



function register(seller, remember) {
  
        return axios.post(`${baseURL}/seller/register`, seller)
        .then(seller => {

            if(remember){
                localStorage.setItem('seller', JSON.stringify(seller.data));
            } else {
                sessionStorage.setItem('seller', JSON.stringify(seller.data));
            }

            return seller.data;
        })
        .catch(err => {
            return Promise.reject(err.response.data.message);
        })
        
}

