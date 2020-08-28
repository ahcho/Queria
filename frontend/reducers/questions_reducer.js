import {
    RECEIVE_ALL_QUESTIONS,
    RECEIVE_QUESTION,
    REMOVE_QUESTION
} from '../actions/question_actions';
import {RECEIVE_TOPIC} from '../actions/topic_actions';
import { RECEIVE_USER } from '../actions/user_actions';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

const QuestionsReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
     
    switch (action.type) {
        case RECEIVE_ALL_QUESTIONS:
            return Object.assign({}, state, action.questions)
        case RECEIVE_QUESTION:
            RECEIVE_QUESTION
            newState[action.payload.question.id] = action.payload.question;
            return newState;
        case REMOVE_QUESTION:
            delete newState[action.questionId];
            return newState;
        case RECEIVE_USER:
            if (!action.payload.questions) return {};
            return action.payload.questions;
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, state, action.payload.questions)
        case RECEIVE_TOPIC:
            if (!action.payload.questions) return {};
            return action.payload.questions;
        // case CLOSE_MODAL:
        //     debugger
        //     return null;
        default:
            return state;
    }
}

export default QuestionsReducer;