import { connect } from 'react-redux';
import PostForm from './post_form';
import { createQuestion, fetchQuestions, updateQuestion } from '../../actions/question_actions';
import { openModal, closeModal } from '../../actions/modal_actions';


const mapStateToProps = state => ({
    post: {
        title: '',
        body: ''
    },
    formType: 'Create Post'
});

const mapDispatchToProps = dispatch => ({
    action: post => dispatch(createPost(post)),
    createQuestion: (question) => dispatch(createQuestion(question)),
    updateQuestion: (question) => dispatch(updateQuestion(question)),
    fetchQuestions: () => dispatch(fetchQuestions()),
    openModal: (modal) => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal()),
    clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);