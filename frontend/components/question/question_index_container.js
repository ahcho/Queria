import { connect } from 'react-redux';
import QuestionIndex from './question_index';
import { fetchQuestions, deleteQuestion } from '../../actions/question_actions';
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = (state) => {

    return ({
        currentUser: state.session.currentUser,
        questions: Object.values(state.entities.questions)
    })
}

const mapDispatchToProps = (dispatch) => {
    //debugger
    return ({
        fetchQuestions: () => (dispatch(fetchQuestions())),
        deleteQuestion: (questionId) => (dispatch(deleteQuestion(questionId))),
        openModal: (modal, questionId) => (dispatch(openModal(modal, questionId)))
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionIndex);