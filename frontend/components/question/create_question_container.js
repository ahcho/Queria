import { connect } from 'react-redux';
import CreateQuestion from './create_question';
import { createQuestion } from '../../actions/question_actions';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = ({ errors }) => {
    return {
        errors: errors.session
        //type: question
    }
}
const mDTP = (dispatch) => {
    return ({
        createQuestion: (question) => dispatch(createQuestion(question)),
        openModal: (modal) => dispatch(openModal(modal)),
        closeModal: () => dispatch(closeModal()),
        clearErrors: () => dispatch(clearErrors())
    })
}

export default connect(mapStateToProps, mDTP)(CreateQuestion);