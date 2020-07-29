import { RECEIVE_QUESTION } from '../actions/question_actions';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import {
    RECEIVE_ALL_COMMENTS,
    RECEIVE_COMMENT,
    REMOVE_COMMENT
} from '../actions/comment_actions';


const  commentsReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_QUESTION:
            return Object.assign(newState, action.payload.comments)
        case RECEIVE_COMMENT: 
            newState[action.comment.id] = action.comment;
            return newState;
        case REMOVE_COMMENT: 
            delete newState[action.comment.id]
            return newState
        default:
            return state;
    }
};

export default commentsReducer;