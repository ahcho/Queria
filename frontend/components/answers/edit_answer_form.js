import React from 'react';
import { connect } from 'react-redux'
import { updateAnswer } from '../../actions/answer_actions';


class EditAnswerForm extends React.Component {
    

    constructor(props) {
        
        super(props);
        this.state = props.answer;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
    }

    handleSubmit(e) {
      e.preventDefault(); 
      const answer = Object.assign({}, this.state);
      this.props.updateAnswer(answer); ///
    } 

    update(e) {
      this.setState({"body": e.currentTarget.value})
    }

    render() {

        return (
          <form className="answer-edit-form" onSubmit={this.handleSubmit}>
            <textarea
              id="answerBox"
              rows="3"
              cols="50"
              value={this.state.body}
              onChange={this.update}
            >
            </textarea>
            <button className="edit-answer-btn" onClick={this.props.handleDropDown}>Edit</button>
          </form>
        );
    }
}


const mapStateToProps = (state, ownProps) => {  
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