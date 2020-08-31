import {
    RECEIVE_ALL_ANSWERS,
    RECEIVE_ANSWER,
    REMOVE_ANSWER} from '../actions/answer_actions';
import { RECEIVE_USER} from '../actions/user_actions';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_QUESTION, RECEIVE_ALL_QUESTIONS } from '../actions/question_actions';
import { CLOSE_MODAL } from '../actions/modal_actions';

const answersReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch(action.type) {
        case RECEIVE_ALL_ANSWERS:
            if (Object.values(action.answers).length === 0) return newState
            return action.answers.answers
        case RECEIVE_ANSWER:
            newState[action.answer.id] = action.answer
            return newState;
        case REMOVE_ANSWER:
            delete newState[action.answerId];
            return newState;
        case RECEIVE_USER:
            if (!action.payload.answers) return {};
            return action.payload.answers;
        case RECEIVE_CURRENT_USER:
            if (!action.payload.answers) return {};
            return action.payload.answers;
        case RECEIVE_QUESTION:
            if (action.payload.answers) return action.payload.answers;
            return newState;
        case RECEIVE_ALL_QUESTIONS:
            if (!action.answers) return {};
            return action.answers;
        default: 
            return state;
    }
}

export default answersReducer;