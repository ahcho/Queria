import React from 'react';

class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.question;
    this.currentUser = props.currentUser;
    this.question = props.question;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  handleKeyDown(e) {
    if (e.key === "Enter") {
      e.preventDefault();
      this.handleSubmit(e);
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const question = Object.assign({}, this.state);
    this.props.action(question).then(() => {
      this.props.closeModal();
    });
  }

  update(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value });
  }

  render() {
    const { formType, question } = this.props;
    if (!question) return null;

    const topicDropDown =
      formType === "Create Question" ? (
        <>
          <select name="topic-select" id="slct">
            <option>Category</option>
            <option value="1">history</option>
            <option value="2">product</option>
            <option value="3">recipe</option>
            <option value="4">health</option>
            <option value="5">tour</option>
          </select>
        </>
      ) : null;

    const createReminder =
      this.props.formType === "Create Question" ? (
        <>
          <div className="question-head">
            <h1 className="q-modal-msg">Add Question</h1>
          </div>
          <div className="question-reminder">
            <h1>Tips on getting good answers quickly</h1>
            <p>Makesure your question has not been asked already</p>
            <p>Keep your question short and to the point</p>
            <p>Double-check grammar and spelling</p>
          </div>
        </>
      ) : (
        <div className="question-head">
          <h1 className="q-modal-msg">Edit Question</h1>
        </div>
      );

    const submitBtn =
      this.props.formType === "Create Question" ? (
        <button 
            onClick={this.handleSubmit} 
            onKeyDown={this.handleKeyDown}>
          Add Question </button>
      ) : (
        <button 
            onClick={this.handleSubmit} 
            onKeyDown={this.handleKeyDown}>
          Edit Question </button>
      );

    const questionHolder = this.props.question.question;
    const getInput =
      this.props.formType === "Create Question" ? (
        <input
          type="text"
          placeholder='Start your question with "What","How","Why", etc'
          onChange={this.update("question")}
        />
      ) : (
        <input
          type="text"
          placeholder={`${questionHolder}`}
          onChange={this.update("question")}
        />
      );

    return (
      <div className="question-modal">
        {createReminder}
        <form className="modal-q-form" onSubmit={this.handleSubmit}>
          <div className="modal-user">
            <i className="fa fa-user-circle" aria-hidden="true"></i>
            <h2 className="q-form-header">
              {this.currentUser.first_name} asked
            </h2>
          </div>
          {getInput}
          <div className="q-form-btn">
            {submitBtn}
            <button onClick={() => this.props.closeModal()}>Cancel</button>
            {topicDropDown}
          </div>
        </form>
      </div>
    );
  }
}


export default PostForm;