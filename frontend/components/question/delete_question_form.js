import React from 'react';
import { connect } from 'react-redux';
import { deleteQuestion } from '../../actions/question_actions';
import { closeModal } from '../../actions/modal_actions';
import PostForm from './post_form';
import { withRouter } from 'react-router-dom';


class DeleteQuestionForm extends React.Component {

    render() {
        const { action, formType, question, currentUser, closeModal, history } = this.props;
        if (!question) return null;
        
        return (
            <>
                < PostForm
                    action={action}
                    formType={formType}
                    question={question}
                    currentUser={currentUser}
                    closeModal={closeModal}
                    history={history}
                />
            </>
        )
    }
}


const mapStateToProps = (state) => {

    return ({
        currentUser: state.session.currentUser,
        question: state.ui.modal.questionId,
        formType: 'Delete Question'
    })
}

const mapDispatchToProps = (dispatch) => {
    return ({
        action: (questionId) => dispatch(deleteQuestion(questionId)),
        closeModal: () => dispatch(closeModal())
    })
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DeleteQuestionForm));