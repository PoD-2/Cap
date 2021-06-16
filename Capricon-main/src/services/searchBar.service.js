const axios = require('axios');
const baseURL = "http://localhost:8080"

export const searchBarServices = {
    searchProducts
};


function searchProducts(searchQuery) {

    return axios.get(`${baseURL}/product/search?search=${searchQuery}`)
    .then(response => {
        return response.data;
    })
    .catch(err => {
        return Promise.reject(err.response.data.message);
    })

}