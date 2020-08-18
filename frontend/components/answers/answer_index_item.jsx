import React from 'react';
import EditAnswerForm from './edit_answer_form'
import CommentIndexContainer from '../comments/comment_index_container';

class AnswerIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dropDown: false,
    };
    this.handleDropDown = this.handleDropDown.bind(this);
  }

  handleDropDown(e) {
    this.setState({ dropDown: !this.state.dropDown });
  }

  handleChange(value) {
    this.setState({ body: value });
  }

  answerPhotoAttached() {
     
    if (this.props.answer.answerPhotoUrl) {
      return <img src={this.props.answer.answerPhotoUrl} />;
    }
  }

  hasProfilePhoto() {
    if (this.props.location === 'profile') {
      return null;
    } else {
      if (this.props.author.profilePhotoUrl) {
        return <img id='answer-profile-photo' src={this.props.author.profilePhotoUrl} />;
      } else {
        return <i className="fa fa-user-circle" aria-hidden="true"></i>;
      }
    }
  }

  render() {
    
    const { answer, author, updateAnswer} = this.props;
    const dropdown = this.state.dropDown ? "" : "edit-hidden";
    const showAnswer = this.state.dropDown ? "not-hidden-answer" : "answer-detail-box";
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
      ) : (<i className="fas fa-user-plus"></i>);

    return (
      <div className="single-answer-box">
        <div className="single-answer-container">
          <div className="snb-top">
            <div className="snb-top-left">
              {this.hasProfilePhoto()}
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
            <br/>
            {this.answerPhotoAttached()}
          </div>
          <CommentIndexContainer answer={answer} author={author} />
        </div>
      </div>
    );
  }
}

export default AnswerIndexItem;
