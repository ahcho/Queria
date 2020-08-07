import { RECEIVE_ALL_TOPICS, RECEIVE_TOPIC } from '../actions/topic_actions';
import {RECEIVE_QUESTION} from '../actions/question_actions'
const topicsReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_ALL_TOPICS:
            return action.topics;
        case RECEIVE_TOPIC:
            newState[action.payload.id] = action.payload;
            return newState;
        default:
            return state;
    };
};

export default topicsReducer;