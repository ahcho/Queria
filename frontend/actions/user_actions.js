import * as UserApiUtil from '../util/user_api_util';

export const RECEIVE_ALL_USERS = "RECEIVE_ALL_USERS";
export const RECEIVE_USER = "RECEIVE_USER";
export const REMOVE_USER = "REMOVE_USER";

const receiveAllUsers = (users) => { 
    return ({
    type: RECEIVE_ALL_USERS,
    users: users
    })
}

const receiveUser = (payload) => { 
    return ({
    type: RECEIVE_USER,
    payload: payload
    })
}

const removeUser = (userId) => {
    return({
        type: REMOVE_USER,
        userId: userId
    })
}

export const fetchAllUsers = () => (dispatch) => (
    UserApiUtil.fetchAllUsers()
        .then(users => dispatch(receiveAllUsers(users)))
);

export const fetchUser = (userId) => (dispatch) => {
    return(
        UserApiUtil.fetchUser(userId)
            .then(user => dispatch(receiveUser(user)))
)}

export const deleteUser = (userId) => (dispatch) => { 
    return(
        UserApiUtil.deleteUser(userId)
            .then(()=> dispatch(removeUser(user)))
)}

export const editUser = (formData, userId) => dispatch => { 
    return(
        UserApiUtil.editUser(formData, userId)
            .then(user => dispatch(receiveUser(user)))
)}