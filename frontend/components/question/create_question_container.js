import { connect } from 'react-redux';
import CreateQuestion from './create_question';
import { createQuestion, fetchQuestions, updateQuestion } from '../../actions/question_actions';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = (state) => {
    return {
        currentUser: state.session.currentUser,
        errors: state.errors.session,
        updateQuestionId: state.questionId,
    }
}

const mapDispatchToProps  = (dispatch) => {
    return ({
        createQuestion: (question) => dispatch(createQuestion(question)),
        updateQuestion: (question) => dispatch(updateQuestion(question)),
        fetchQuestions: () => dispatch(fetchQuestions()),
        openModal: (modal) => dispatch(openModal(modal)),
        closeModal: () => dispatch(closeModal()),
        clearErrors: (test) => dispatch(clearErrors(test))
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateQuestion);