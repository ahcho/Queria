import { connect } from 'react-redux';
import PostForm from './post_form';
import { createQuestion } from '../../actions/question_actions';
import { closeModal } from '../../actions/modal_actions';
import React from 'react';
class CreateQuestionForm extends React.Component {

    render() {
        const { action, formType, question, currentUser, closeModal } = this.props;
        if (!question) return null;
   
        return (
            <>
                < PostForm
                    action={action}
                    formType={formType}
                    question={question}
                    currentUser={currentUser}
                    closeModal={closeModal}
                />
            </>
        )
    }
}

const mapStateToProps = state => ({
    question: {
        question: "",
        author_id: state.session.currentUser.id,
        topic_id: 10, // default value, needs to be updated later
        question_id: ""
    },
    currentUser: state.session.currentUser,
    formType: 'Create Question'
});

const mapDispatchToProps = dispatch => ({
    action: post => dispatch(createQuestion(post)),
    closeModal: () => dispatch(closeModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateQuestionForm);