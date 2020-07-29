import { connect } from 'react-redux';
import CommentIndex from './coment_index'
import { fetchComments, deleteComment } from '../../actions/comment_actions';

const mapStateToProps = (state, ownProps) => {
    
    return ({
        comments: Object.values(state.entities.comments),
        answer_id: ownProps.answer.id
    })
};

const mapDispatchToProps = (dispatch) => {
    return ({
        fetchComments: (id) => dispatch(fetchComments(id)),
        deleteComment: (id) => dispatch(deleteComment(id))
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentIndex)