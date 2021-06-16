import { userConstants } from '../constants';

let user = JSON.parse(localStorage.getItem('user'));
let tempUser = JSON.parse(sessionStorage.getItem('user'));
const initialState = tempUser ? { loggedIn: true, user: tempUser } : user ? { loggedIn: true, user: user } : {};

export function userAuth(state = initialState, action) {
    switch (action.type) {
        case userConstants.LOGIN_REQUEST:
            return {
                ...state,
                loading: true
            };
        case userConstants.LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                loggedIn: true,
                user: action.user
            };
        case userConstants.LOGIN_FAILURE:
            return {};
        case userConstants.LOGOUT:
            return {};
        case userConstants.REGISTER_REQUEST:
            return {
                    ...state,
                    loading: true
                };
        case userConstants.REGISTER_SUCCESS:
            return {
                   ...state,
                   loading: false,
                   loggedIn: true,
                   user: action.user
                };
        case userConstants.REGISTER_FAILURE:
            return {}; 
        default:
            return state
    }
} 