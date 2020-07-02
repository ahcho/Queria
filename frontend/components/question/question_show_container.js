import {connect} from "react-redux";
import { updateQuestion, deleteQuestion, fetchQuestion } from "../../actions/question_actions";
import QuestionShow from './question_show';
import { deleteAnswer, updateAnswer } from '../../actions/answer_actions';

const mapStateToProps = (state, ownProps) => {
    return ({ 
        question: state.entities.questions[ownProps.match.params.questionId],
        answers: Object.values(state.entities.answers),
        users: state.entities.users,
        currentUser: state.session.currentUser
    })
}

const mapDispatchToProps = (dispatch) => {
    return ({
        fetchQuestion: (questionId) => dispatch(fetchQuestion(questionId)),
        deleteQuestion: (questionId) => (dispatch(deleteQuestion(questionId))),
        updateQuestion: (question) => (dispatch(updateQuestion(question))),
        deleteAnswer: (answerId) => (dispatch(deleteAnswer(answerId))),
        updateAnswer: (answer) => (dispatch(updateAnswer(answer))) 
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionShow);