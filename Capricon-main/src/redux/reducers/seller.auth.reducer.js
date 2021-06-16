import { sellerConstants } from '../constants';

let seller = JSON.parse(localStorage.getItem('seller'));
let tempSeller = JSON.parse(sessionStorage.getItem('seller'));
const initialState = tempSeller ? { loggedIn: true, seller: tempSeller } : seller ? { loggedIn: true, seller: seller } : {};

export function sellerAuth(state = initialState, action) {
    switch (action.type) {
        case sellerConstants.LOGIN_REQUEST:
            return {
                ...state,
                loading: true
            };
        case sellerConstants.LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                loggedIn: true,
                seller: action.seller
            };
        case sellerConstants.LOGIN_FAILURE:
            return {};
        case sellerConstants.LOGOUT:
            return {};
        case sellerConstants.REGISTER_REQUEST:
            return {
                    ...state,
                    loading: true
                };
        case sellerConstants.REGISTER_SUCCESS:
            return {
                   ...state,
                   loading: false,
                   loggedIn: true,
                   seller: action.seller
                };
        case sellerConstants.REGISTER_FAILURE:
            return {}; 
        default:
            return state
    }
} 