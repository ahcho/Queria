import { connect } from 'react-redux';
import AnswerIndex from './answer_index';
import { deleteAnswer, 
         updateAnswer } from '../../actions/answer_actions';

const mapStateToProps = (state, ownProps) => {
    return ({
        // SELECTOR PATTERN, I WANT ANSER TO COME IN, BUT NOT EVERY ANSWER IN GLOBAL STATE
        answers: Object.values(state.entities.answers).filter(ele => ele.question_id === ownProps.questionId),
        users: state.entities.users, // I WANT ALL THE USERS FROM GLOBAL STATE
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

