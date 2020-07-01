import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_ALL_USERS,
         RECEIVE_USER,
         REMOVE_USER} from "../actions/user_actions";
import { RECEIVE_QUESTION, RECEIVE_ALL_QUESTIONS } from "../actions/question_actions";

const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state)

    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            nextState[action.payload.user.id] = action.payload.user;
            return nextState;
        case RECEIVE_ALL_USERS:
            return action.users;
        case RECEIVE_USER:
            nextState[action.payload.user.id] = action.payload.user;
            return nextState;
        case REMOVE_USER:
            delete nextState[action.userId];
            return nextState;
        case RECEIVE_QUESTION:
            //if (!action.payload.users) return {};
            // return action.payload.users;
            return Object.assign(nextState, action.payload.users);
        // case RECEIVE_ALL_QUESTIONS:
        //     if(!action.payload.users) return state;
        //     return Object.assign(nextState, action.payload.users);
        default:
            return state;
    }
};

export default usersReducer;