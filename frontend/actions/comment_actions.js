import * as commentApiUtil from '../util/comment_api_util';

export const RECEIVE_ALL_COMMENTS = 'RECEIVE_ALL_COMMENTS';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT'

const receiveComments = (comments) => {
    return ({
        type: RECEIVE_ALL_COMMENTS,
        comments: comments
    })
};

const receiveComment = (comment) => {
    return ({
        type: RECEIVE_COMMENT,
        comment: comment
    })
};

const removeComment = (comment) => ({
    type: REMOVE_COMMENT,
    comment
})

export const fetchComments = (answerId) => dispatch => {
    return commentApiUtil.fetchComments(answerId)
    .then((comments) => dispatch(receiveComments(comments)))
};

export const createComment = (comment) => dispatch => {
    return commentApiUtil.createComment(comment)
    .then((comment) => dispatch(receiveComment(comment)))
};

export const deleteComment =  (commentId) => dispatch => {
    return (
        commentApiUtil.deleteComment(commentId)
        .then((comment) => dispatch(removeComment(comment))))
};