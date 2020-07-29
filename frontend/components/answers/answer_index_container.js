import { connect } from 'react-redux';
import AnswerIndex from './answer_index';
import { deleteAnswer, 
         updateAnswer } from '../../actions/answer_actions';
import { createComment } from '../../actions/comment_actions';

const mapStateToProps = (state) => {
    //debugger
    return ({
        answers: Object.values(state.entities.answers),
        users: state.entities.users,
        currentUser: state.session.currentUser,
        comments: Object.values(state.entities.comments)
    })
    
}

const mapDispatchToProps = (dispatch) => {
    return ({ 
        deleteAnswer: (answerId) => (dispatch(deleteAnswer(answerId))),
        updateAnswer: (answer) => (dispatch(updateAnswer(answer))),
        createComment: (comment) => (dispatch(createComment(comment)))
    })
    
}

export default connect(mapStateToProps, mapDispatchToProps)(AnswerIndex);

