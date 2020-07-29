import { connect } from 'react-redux';
import CommentIndex from './coment_index'
import { deleteComment } from '../../actions/comment_actions';

const mapStateToProps = (state, ownProps) => {
   
    return ({
        comments: Object.values(state.entities.comments),
        answer_id: ownProps.answer.id,
        currentUser_id: state.session.currentUser.id
    })
};

const mapDispatchToProps = (dispatch) => {
    return ({
        deleteComment: (id) => (dispatch(deleteComment(id)))
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentIndex)