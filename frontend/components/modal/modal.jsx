import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import SignupContainer from '../signup_form/signup_container';
import EditQuestionForm from '../question/edit_question_form_container';
import CreateQuestionForm from '../question/create_question_form_container';
import DeleteQuestionForm from '../question/delete_question_form';
// functional component, no render
// different displays depanding on props.
// hooks let us change
function Modal({ modal, closeModal }) {
    if (!modal) {
        return null;
    }
    let component;
    switch (modal.modal) {
        case 'signup':
            component = <SignupContainer />;
            break;
        case 'createquestion':
            component = <CreateQuestionForm />
            break;
        case 'editquestion':
            component = <EditQuestionForm question={modal.questionId} />;
            break;
        case 'deletequestion':
            component = <DeleteQuestionForm question={modal.questionId}/>;
            break;
        default:
            return null;
    }
    return (
        <div className="modal-background" onClick={closeModal}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        modal: state.ui.modal
    };
};

const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);