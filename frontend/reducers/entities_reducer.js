import { combineReducers } from "redux";

import usersReducer from "./users_reducer";
import QuestionsReducer from "./questions_reducer";

const entitiesReducer = combineReducers({
    users: usersReducer,
    questions: QuestionsReducer
});

export default entitiesReducer;