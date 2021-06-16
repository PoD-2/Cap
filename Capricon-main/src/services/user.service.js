// import config from 'config';
const axios = require('axios');
const baseURL = "http://localhost:8080"

export const userService = {
    login,
    logout,
    register
};



function login(user, remember) {
  
    return axios.post(`${baseURL}/login`, user)
    .then(user => {

        if(remember){
            localStorage.setItem('user', JSON.stringify(user.data));
        } else {
            sessionStorage.setItem('user', JSON.stringify(user.data));
        }

        return user.data;
    })
    .catch(err => {
        return Promise.reject(err.response.data.message);
    })

}


function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}



function register(user, remember) {
  
        return axios.post(`${baseURL}/register`, user)
        .then(user => {

            if(remember){
            localStorage.setItem('user', JSON.stringify(user.data));
            } else {
                sessionStorage.setItem('user', JSON.stringify(user.data));
            }

            return user.data;
        })
        .catch(err => {
            return Promise.reject(err.response.data.message);
        })
        
}

