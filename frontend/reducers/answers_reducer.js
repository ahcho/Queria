import {
    RECEIVE_ALL_ANSWERS,
    RECEIVE_ALL_USER_ANSWERS,
    RECEIVE_ANSWER,
    REMOVE_ANSWER} from '../actions/answer_actions';


const answersReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);

    switch(action.type) {
        case RECEIVE_ALL_ANSWERS:
            return action.answers
        // case RECEIVE_ALL_USER_ANSWERS:
        //     return
        case RECEIVE_ANSWER:
            newState[action.answer.id] = action.answer
            return newState;
        case REMOVE_ANSWER:
            delete newState[action.answerId];
            return newState;
        default: 
            return state;
    }
}

export default answersReducer;