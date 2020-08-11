import { connect } from 'react-redux';
import CommentIndex from './coment_index'
import { deleteComment, createComment } from '../../actions/comment_actions';

const mapStateToProps = (state, ownProps) => {
    // debugger
    return ({
        comments: Object.values(state.entities.comments),
        answer_id: ownProps.answer.id,
        currentUser_id: state.session.currentUser.id
    })
};

const mapDispatchToProps = (dispatch) => {
    
    return ({
        deleteComment: (id) => (dispatch(deleteComment(id))),
        createComment: (comment) => (dispatch(createComment(comment)))
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentIndex)