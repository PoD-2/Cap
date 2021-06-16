import { userConstants } from '../constants';
import { userService } from '../../services/';
import { alertActions } from './';
import { history } from '../../helpers/history';

export const userActions = {
    login,
    logout,
    register
};

function login(user, remember) {
    return dispatch => {
        dispatch(request()); 

        userService.login(user, remember)
            .then(
                user => { 
                        dispatch(success(user));
                        history.push('/');
                   
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}

function logout() {
    userService.logout();
    return { type: userConstants.LOGOUT };
}

function register(user, remember) {
    return dispatch => {
        dispatch(request());

        userService.register(user,remember)
            .then(
                user => { 
                    dispatch(success(user));
                    history.push('/');

                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(user) { return { type: userConstants.REGISTER_REQUEST, user } }
    function success(user) { return { type: userConstants.REGISTER_SUCCESS, user } }
    function failure(error) { return { type: userConstants.REGISTER_FAILURE, error } }
}




