import React from 'react';
import { connect } from 'react-redux'
import { updateAnswer} from '../../actions/answer_actions';
import AnswerForm from './post_form';

class EditAnswerForm extends React.Component {

    render() {
        
        //const { action, formType, question, currentUser, fetchQuestion, closeModal } = this.props;
        //if (!question) return null;
        //  create_table "answers", force: :cascade do |t|
        // t.string "body", null: false
        // t.integer "author_id", null: false
        // t.integer "question_id", null: false
        return (
            <>
                <AnswerForm />
            </>
        )
    }
}


const mapStateToProps = (state, ownProps) => {

    // currentUser: state.session.currentUser,
    // question: state.ui.modal.questionId,
    return ({
        formType: 'Update Answer'
    })
}

const mapDispatchToProps = (dispatch) => {
    return ({
        action: (question) => dispatch(updateAnswer(question)),
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(EditAnswerForm);