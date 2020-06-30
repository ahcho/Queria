import { connect } from 'react-redux';
import CreateQuestion from './create_question';
import { createQuestion, fetchQuestions } from '../../actions/question_actions';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = (state) => {
    //debugger;
    return {
        currentUser: state.session.currentUser,
        errors: state.errors.session
    }
}
const mDTP = (dispatch) => {
    return ({
        createQuestion: (question) => dispatch(createQuestion(question)),
        fetchQuestions: () => dispatch(fetchQuestions()),
        openModal: (modal) => dispatch(openModal(modal)),
        closeModal: () => dispatch(closeModal()),
        clearErrors: () => dispatch(clearErrors())
    })
}

export default connect(mapStateToProps, mDTP)(CreateQuestion);