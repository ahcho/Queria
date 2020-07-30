import React from 'react';
import EditAnswerForm from './edit_answer_form'
import { Link } from 'react-router-dom';
import CommentIndexContainer from '../comments/comment_index_container';

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
        <div className="single-answer-container">
        <div className="snb-top">
          <div className="snb-top-left">
            <i className="fa fa-user-circle" aria-hidden="true"></i>
            <div className="answer-name-time">
              <p className="a-author-name">
                {author.first_name} {author.last_name}
              </p>
              <p className="a-date">
                {answer.updated_at.slice(0, 10)} at{" "}
                {answer.updated_at.slice(11, 16)}
              </p>
            </div>
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
          <p className="single-answer-body">{answer.body}</p>
        </div>
        <div className="comment-section">
          <div className="comment-form">
            <input
              type="text"
              id="comment-box"
              onChange={this.update("body")}
              placeholder="Add a comment..."
              value={this.state.body}>
            </input>

            <button className="comment-button" onClick={this.handleSubmit}>Comment</button>
          </div>
          <CommentIndexContainer
            answer={answer}
            author={author}
          />
          </div>
        </div>
      </div>
    );
  }
}

export default AnswerIndexItem;
