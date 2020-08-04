import { RECEIVE_ALL_TOPICS, RECEIVE_TOPIC } from '../actions/topic_actions';

const topicsReducer = (state = {}, action) => {

    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_ALL_TOPICS:
            return action.topics;
        // case RECEIVE_TOPIC:
        //     return action.payload.questions;
        default:
            return state;
    };
};

export default topicsReducer;