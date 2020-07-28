import React from 'react';
import { connect } from 'react-redux'
import { updateAnswer} from '../../actions/answer_actions';


class EditAnswerForm extends React.Component {
    

    constructor(props) {
        
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        
    } 
    render() {
        
        //const { action, formType, question, currentUser, fetchQuestion, closeModal } = this.props;
        //if (!question) return null;
        //  create_table "answers", force: :cascade do |t|
        // t.string "body", null: false
        // t.integer "author_id", null: false
        // t.integer "question_id", null: false
        //debugger;
        return (
          <form className="answer-edit-form" onSubmit={this.handleSubmit}>
            <textarea
              id="answerBox"
              rows="3"
              cols="50"
              value={this.props.answer.body}
              onChange={this.handleSubmit}
            >
              {/* {this.state.body} */}
            </textarea>
            <button className="edit-answer-btn">Edit</button>
          </form>
        );
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