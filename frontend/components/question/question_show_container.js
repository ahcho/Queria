import {connect} from "react-redux";
import { updateQuestion, deleteQuestion, fetchQuestion } from "../../actions/question_actions";
import QuestionShow from './question_show';
import { deleteAnswer, updateAnswer, fetchAnswers } from '../../actions/answer_actions';
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
    return ({ 
        question: state.entities.questions[ownProps.match.params.questionId],
        answers: Object.values(state.entities.answers).filter(ele => ele.question_id === parseInt(ownProps.match.params.questionId) ),
        users: state.entities.users,
        currentUser: state.session.currentUser,
    })
}
// what do I need to do through redux
const mapDispatchToProps = (dispatch) => {
    return ({
        fetchAnswers: (questionId) => dispatch(fetchAnswers(questionId)),
        fetchQuestion: (questionId) => dispatch(fetchQuestion(questionId)),
        deleteQuestion: (questionId) => (dispatch(deleteQuestion(questionId))),
        updateQuestion: (question) => (dispatch(updateQuestion(question))),
        deleteAnswer: (answerId) => (dispatch(deleteAnswer(answerId))),
        updateAnswer: (answer) => (dispatch(updateAnswer(answer))),
        openModal: (modal, questionId) => (dispatch(openModal(modal, questionId)))
    })
}

// global state changes connect see the 
// react props changing, I need to update, dom and virutal dom, these don't match this component need to rerender
export default connect(mapStateToProps, mapDispatchToProps)(QuestionShow);