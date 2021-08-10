import { CLEAR_SEARCH_RESULTS } from "../actions/search_actions";
import { RECEIVE_QUESTION } from "../actions/question_actions";

const filteredSearchResultsReducer = (state = [], action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_QUESTION:
            return action.payload;
        case CLEAR_SEARCH_RESULTS:
            return [];
        default:
            return state;
    }
};

export default filteredSearchResultsReducer;