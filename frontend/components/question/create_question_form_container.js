import { connect } from 'react-redux';
import PostForm from './post_form';
import { createQuestion } from '../../actions/question_actions';
import { closeModal } from '../../actions/modal_actions';
import React from 'react';
import { withRouter } from 'react-router-dom';
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
        topic_id: null, 
        photoFile: null,
        photoUrl: null
    },
    currentUser: state.session.currentUser,
    formType: 'Create Question'
});

const mapDispatchToProps = dispatch => ({
    action: post => dispatch(createQuestion(post)),
    closeModal: (questionId) => dispatch(closeModal(questionId)),
});

export default withRouter( connect(mapStateToProps, mapDispatchToProps)(CreateQuestionForm));