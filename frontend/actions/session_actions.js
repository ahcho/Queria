import * as APIUtil from '../util/session_api_util';

// action constants
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';//login errors
export const REMOVE_SESSION_ERRORS = 'REMOVE_SESSION_ERRORS';
export const RECEIVE_SESSION_SIGNUP_ERRORS = 'RECEIVE_SESSION_SIGNUP_ERRORS'

// action creators
export const receiveCurrentUser = (currentUser) => ({
    type: RECEIVE_CURRENT_USER,
    currentUser: currentUser
});

export const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER,
});

export const receiveErrors = (errors) => { 
    return({
        type: RECEIVE_SESSION_ERRORS,
        errors: errors
})}

export const removeErrors = () => {
    return ({
        type: REMOVE_SESSION_ERRORS,
    })
}
 
export const receiveSignupErrors = (errors) => {
    return({
        type: RECEIVE_SESSION_SIGNUP_ERRORS,
        errors: errors
    })
}

// thunk action creators 
export const createNewUser = (user) => (dispatch) => {

    return ( APIUtil.createNewUser(user)
            .then(user => (dispatch(receiveCurrentUser(user))), 
            err => (dispatch(receiveSignupErrors(err.responseJSON))))
    )
}

export const login = (user) => (dispatch) => {
    // 
    return (APIUtil.login(user)
            .then(user => (dispatch(receiveCurrentUser(user))), 
            err => { // 
            return ( dispatch(receiveErrors(err.responseJSON)))})
)}

export const logout = () => (dispatch) => (APIUtil.logout()
    .then( () => (dispatch(logoutCurrentUser())
    ))
);

export const clearErrors = () => (dispatch) => {
    return dispatch(removeErrors());
}