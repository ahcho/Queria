import * as QuestionApiUtil from '../util/question_api_util';

export const RECEIVE_ALL_QUESTIONS = 'RECEIVE_ALL_QUESTIONS';
export const RECEIVE_QUESTION = 'RECEIVE_QUESTION';
export const REMOVE_QUESTION = 'REMOVE_QUESTION';

const receiveAllQuestions = (questions) => {
    return ({
        type: RECEIVE_ALL_QUESTIONS,
        questions
    })
};

const receiveQuestion = (payload) => {
     ;
    return ({
        type: RECEIVE_QUESTION,
        payload: payload
    })
}
const removeQuestion = (questionId) => {
    return ({
        type: REMOVE_QUESTION,
        questionId
    })
};


export const fetchQuestions = () => (dispatch) => {
    return QuestionApiUtil.fetchQuestions()
        .then((questions) => dispatch(receiveAllQuestions(questions)))
};

export const fetchQuestion = (questionId) => (dispatch) => {
     
    return QuestionApiUtil.fetchQuestion(questionId)
        .then((payload) => dispatch(receiveQuestion(payload)))
};

export const createQuestion = (question) => (dispatch) => {
    return QuestionApiUtil.createQuestion(question)
        .then((question) => dispatch(receiveQuestion(question)))
};

export const updateQuestion = (question) => (dispatch) => {
    return QuestionApiUtil.updateQuestion(question)
        .then((question) => dispatch(receiveQuestion(question)))
};

export const deleteQuestion = (questionId) => (dispatch) => {
    return QuestionApiUtil.deleteQuestion(questionId)
    .then(() => dispatch(removeQuestion(questionId)))
};

