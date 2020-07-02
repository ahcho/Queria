import * as answerApiUtil from '../util/answer_api_util';


export const RECEIVE_ALL_ANSWERS = "RECEIVE_ALL_ANSWERS";
export const RECEIVE_ALL_USER_ANSWERS = "RECEIVE_ALL_USER_ANSWERS";
export const RECEIVE_ANSWER = "RECEIVE_ANSWER";
export const REMOVE_ANSWER = "REMOVE_ANSWER";

const receiveAllAnswers = (answers) => {
    return ({
        type: RECEIVE_ALL_ANSWERS,
        answers: answers
    })
}

const receiveAnswer = (answer) => {
    return ({
        type: RECEIVE_ANSWER,
        answer: answer
    })
}

const removeAnswer = (answerId) => {
    return ({
        type: REMOVE_ANSWER,
        answerId: answerId
    })
}
//get answers belong to a question
export const fetchAnswers = (questionId) => (dispatch) => (
    answerApiUtil.fetchAnswers(questionId)
        .then(answers => dispatch(receiveAllAnswers(answers)))
);

//get all answes by a logged in user
export const fetchUserAllAnswers = (userId) => (dispatch) => (
    answerApiUtil.fetchUserAllAnswers(userId)
        .then(answers => dispatch(receiveAllAnswers(answers)))
);

export const createAnswer = (answer) => (dispatch) => {
    //debugger
    return (
    answerApiUtil.createAnswer(answer)
        .then(newAnswer => dispatch(receiveAnswer(newAnswer)))
)}

export const updateAnswer = (answer) => (dispatch) => (
    answerApiUtil.updateAnswer(answer)
        .then(updatedAnswer => dispatch(receiveAnswer(updatedAnswer)))
)

export const deleteAnswer = (answerId) => (dispatch) => (
    answerApiUtil.deleteAnswer(answerId)
        .then(() => dispatch(removeAnswer(answerId)))
)