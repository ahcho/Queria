import {
    RECEIVE_ALL_QUESTIONS,
    RECEIVE_QUESTION,
    REMOVE_QUESTION
} from '../actions/question_actions';
import { RECEIVE_USER } from '../actions/user_actions';

const QuestionsReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_ALL_QUESTIONS:
            return action.questions;
        case RECEIVE_QUESTION:
            newState[action.question.id] = action.question;
            return newState;
        case REMOVE_QUESTION:
            delete newState[action.questionId];
            return newState;
        case RECEIVE_USER://///////////////////
            if (!action.payload.questions) return {};
            return action.payload.questions;
        default:
            return state;
    }
}

export default QuestionsReducer;