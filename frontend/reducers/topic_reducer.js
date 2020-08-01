import { RECEIVE_ALL_TOPICS, RECEIVE_TOPIC } from '../actions/topic_actions';

const topicsReducer = (oldState = {}, action) => {

    Object.freeze(oldState);
    
    switch (action.type) {
        case RECEIVE_ALL_TOPICS:
            return action.topics;
        case RECEIVE_TOPIC:
            return action.payload.topics;
        default:
            return oldState;
    };
};

export default topicsReducer;