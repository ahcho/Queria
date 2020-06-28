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

const receiveAllUserAnswers = (answers) => {
    return ({
        type: RECEIVE_ALL_USER_ANSWERS,
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

export const fetchAnswers = (questionId) => (dispatch) => (
    answerApiUtil.fetchAnswers(questionId)
        .then(answers => dispatch(receiveAllAnswers(answers)))
);

export const fetchAllUserAnswers = (userId) => (dispatch) => (
    answerApiUtil.fetchAllUserAnswers(userId)
        .then(answers => dispatch(receiveAllUserAnswers(answers)))
);

export const createAnswer = (answer) => (dispatch) => (
    answerApiUtil.createAnswer(answer)
        .then(answer => dispatch(receiveAnswer(answer)))
)

export const updateAnswer = (answer) => (dispatch) => (
    answerApiUtil.updateAnswer(answer)
        .then(answer => dispatch(receiveAnswer(answer)))
)

export const deleteAnswer = (answerId) => (dispatch) => (
    answerApiUtil.deleteAnswer(answerId)
        .then(() => dispatch(removeAnswer(answerId)))
)