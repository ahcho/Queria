import { connect } from 'react-redux';
import AnswerIndex from './answer_index';
import { createAnswer, 
         deleteAnswer, 
         updateAnswer } from '../../actions/answer_actions'

const mapStateToProps = (state) => {

    return ({
        answers: Object.values(state.entities.answers),
        //questions: Object.values(state.entities.questions),
        users: state.entities.users,
        currentUser: state.session.currentUser,
    })
    
}

const mapDispatchToProps = (dispatch) => {

    return ({ 
        //createAnswer: (answer) => (dispatch(createAnswer(answer))),
        deleteAnswer: (answerId) => (dispatch(deleteAnswer(answerId))),
        updateAnswer: (answer) => (dispatch(updateAnswer(answer)))
    })
    
}

export default connect(mapStateToProps, mapDispatchToProps)(AnswerIndex);
