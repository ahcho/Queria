import React from 'react';

class PostForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = props.question;
    this.currentUser = props.currentUser;
    this.question = props.question;
    this.update = this.update.bind(this);
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

  update(key) {

    return (e) => {
      this.setState({ [key]: e.currentTarget.value })
    };
  }

  render() {
    const topics = ["history", "product", "recipe", "health", "tour"]
    const { formType, question } = this.props;
    if (!question) return null;

    const topicDropDown =
      formType === "Create Question" ? (
       topics.map((topic, idx) => {
         return (
           <option key={idx} value={idx+1}>{topic}</option>
         )
       })
      ) : null;

    const createReminder =
      this.props.formType === "Create Question" ? (
        <>
          <div className="question-head">
            <h1 className="q-modal-msg">Add Question</h1>
            <i
              className="fa fa-times"
              aria-hidden="true"
              onClick={() => this.props.closeModal()}
            ></i>
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
          <i
            className="fa fa-times"
            aria-hidden="true"
            onClick={() => this.props.closeModal()}
          ></i>
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

    //let questionHolder = this.props.question.question;
    const getInput =
      this.props.formType === "Create Question" ? (
        <input
          type="text"
          placeholder='Start your question with "What","How","Why", etc'
          onChange={this.update("question")}
        />
      ) : (
        <textarea value={this.state.question} onChange={this.update("question")} cols="30" rows="2"></textarea>
        
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
        </form>
        <div className="q-form-btn">
          {submitBtn}
          <select name="topic-select" id="slct" onChange={this.update("topic")}>
            {topicDropDown}
          </select> 
        </div>
      </div>
    );
  }
}


export default PostForm;