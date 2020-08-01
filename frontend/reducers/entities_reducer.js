import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import QuestionsReducer from "./questions_reducer";
import answersReducer from "./answers_reducer";
import commentsReducer from "./comments_reducer";
import topicsReducer from "./topics_reducer";

const entitiesReducer = combineReducers({
    users: usersReducer,
    questions: QuestionsReducer,
    answers: answersReducer,
    comments: commentsReducer,
    topics: topicsReducer,
});

export default entitiesReducer;