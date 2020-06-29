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

// const receiveUser = (user) => { 
//     return ({
//     type: RECEIVE_USER,
//     user: user
//     })
// }

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

export const fetchUser = (userId) => (dispatch) => (
    UserApiUtil.fetchUser(userId)
        .then(user => dispatch(receiveUser(user)))
);

export const deleteUser = (userId) => (dispatch) => (
    UserApiUtil.deleteUser(userId)
        .then(()=> dispatch(removeUser(user)))
)