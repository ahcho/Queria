import { combineReducers } from "redux";

import usersReducer from "./users_reducer";
import QuestionsReducer from "./questions_reducer";
import answersReducer from "./answers_reducer";

const entitiesReducer = combineReducers({
    users: usersReducer,
    questions: QuestionsReducer,
    answers: answersReducer
});

export default entitiesReducer;