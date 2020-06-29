import { connect } from 'react-redux';
import EditQuestionForm from './edit_question_form';
import { updateQuestion, fetchQuestion } from '../../actions/question_actions';
import { closeModal } from '../../actions/modal_actions';


const mapStateToProps = (state) => {
    return {
        currentUser: state.session.currentUser,
    }
}
const mapDispatchToProps = (dispatch) => {
    return ({
        updateQuestion: (question) => dispatch(updateQuestion(question)),
        fetchQuestion: (questionId) => dispatch(fetchQuestion(questionId)),
        closeModal: () => dispatch(closeModal()),
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(EditQuestionForm);