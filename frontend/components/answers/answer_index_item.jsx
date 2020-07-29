import React from 'react';
import EditAnswerForm from './edit_answer_form'
import { Link } from 'react-router-dom';

class AnswerIndexItem extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      dropDown: false,
      body: ""
    };
    this.handleDropDown = this.handleDropDown.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleDropDown(e) {
    this.setState({ dropDown: !this.state.dropDown });
  }
//////////////////////
  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  };

  handleSubmit(e) {
    e.preventDefault();
    this.props.createComment({body: this.state.body, answer_id: this.props.answer.id, user_id: this.props.currentUser.id});
    this.setState({ body: "" });
  }

  handleChange(value) {
    this.setState({ body: value })
  }
//////////////////////
  render() {
    const { answer, author, updateAnswer } = this.props;
    const dropdown = this.state.dropDown ? "" : "edit-hidden" ;
    const showAnswer = this.state.dropDown? "not-hidden-answer" : "";
    if (!answer || !author) return null;

    const deleteButton =
      this.props.currentUser.id === this.props.author.id ? (
        <div className="snb-top-right">
          <i className="far fa-edit" onClick={this.handleDropDown}></i>
          <i
            className="fas fa-times"
            onClick={() => this.props.deleteAnswer(answer.id)}
          ></i>
        </div>
      ) : null;

    return (
      <div className="single-answer-box">
        <div className="snb-top">
          <div className="snb-top-left">
            <i className="fa fa-user-circle" aria-hidden="true"></i>
            <p className="a-author-name">
              {author.first_name} {author.last_name}
            </p>
            <p className="a-date">
              {answer.updated_at.slice(0, 10)} at{" "}
              {answer.updated_at.slice(11, 16)}
            </p>
          </div>
          {deleteButton}
        </div>
        <div className={dropdown} id="answer-edit-box">
          <EditAnswerForm
            handleDropDown={this.handleDropDown}
            answer={answer}
            author={author}
            updateAnswer={updateAnswer}
          />
        </div>
        <div className={showAnswer}>
          <p>{answer.body}</p>
        </div>
        <div className="comment-form">
          <input
            type="text"
            className="comment-box"
            onChange={this.update("body")}
            placeholder="Add a comment..."
            value={this.state.body}>
          </input>

          <button className="comment-button" onClick={this.handleSubmit}>Comment</button>
        </div>
      </div>
    );
  }
}

export default AnswerIndexItem;
