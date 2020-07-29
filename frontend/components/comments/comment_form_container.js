import { connect } from 'react-redux';
import CommentForm from './comment_form';
import { createComment } from '../actions/comment_actions';

const mapStateToProps = (state, ownProps) => {
    return ({
        body: "",
        answerId: ownProps.answerId,
        authorId: ownProps.userId
    })
}

const mapDispatchToProps = (dispatch) => {
    return ({
        createComment: (comment) => dispatch(createComment(comment)),
        deleteComment: (commentId) => dispatch(deleteComment(commentId))
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);
