import { connect } from 'react-redux';
import AnswerIndex from './answer_index';
import { deleteAnswer, 
         updateAnswer } from '../../actions/answer_actions';

const mapStateToProps = (state, ownProps) => {
    return ({
        // answers: Object.values(state.entities.answers),
        answers: Object.values(state.entities.answers).filter(ele => ele.question_id === ownProps.questionId),
        users: state.entities.users,
        currentUser: state.session.currentUser,
        comments: Object.values(state.entities.comments)
    })
    
}

const mapDispatchToProps = (dispatch) => {
    return ({ 
        deleteAnswer: (answerId) => (dispatch(deleteAnswer(answerId))),
        updateAnswer: (answer) => (dispatch(updateAnswer(answer))),
    })
    
}

export default connect(mapStateToProps, mapDispatchToProps)(AnswerIndex);

