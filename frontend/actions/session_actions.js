import * as APIUtil from '../util/session_api_util';

// action constants
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

// action creators
export const receiveCurrentUser = (currentUser) => ({
    type: RECEIVE_CURRENT_USER,
    currentUser: currentUser
});

export const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER,
});

export const receiveErrors = (errors) => { 
    //debugger
    return({
        type: RECEIVE_SESSION_ERRORS,
        errors: errors
})}

// thunk action creators 
export const createNewUser = (user) => (dispatch) => {

    return ( APIUtil.createNewUser(user)
            .then(user => (dispatch(receiveCurrentUser(user))), 
            err => (dispatch(receiveErrors(err.responseJSON))))
    )
}

export const login = (user) => (dispatch) => {
    //debugger
    return (APIUtil.login(user)
            .then(user => (dispatch(receiveCurrentUser(user))), 
            err => { //debugger
            return ( dispatch(receiveErrors(err.responseJSON)))})
)}

export const logout = () => (dispatch) => (APIUtil.logout()
    .then( () => (dispatch(logoutCurrentUser())
    ))
);