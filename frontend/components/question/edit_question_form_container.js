import React from 'react';
import { connect } from 'react-redux';
import { updateQuestion, fetchQuestion } from '../../actions/question_actions';
import { closeModal } from '../../actions/modal_actions';
import PostForm from './post_form';

class EditQuestionForm extends React.Component {
    
    render() {
        const {action, formType, question, currentUser, fetchQuestion, closeModal} = this.props;
        if (!question) return null;

        return (
            <>
                < PostForm
                    action={action}
                    formType={formType}
                    question={question}
                    currentUser={currentUser}
                    fetchQuestion={fetchQuestion}
                    closeModal={closeModal}
                />
            </>
        )
    }
}


const mapStateToProps = (state) => {
   
    return ({
        currentUser: state.session.currentUser,
        question: state.ui.modal.questionId,
        formType: 'Update Question'
    })
}

const mapDispatchToProps = (dispatch) => {
    return ({
        action: (question) => dispatch(updateQuestion(question)),
        fetchQuestion: (questionId) => dispatch(fetchQuestion(questionId)),
        closeModal: () => dispatch(closeModal())
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(EditQuestionForm);