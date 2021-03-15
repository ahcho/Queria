import React from 'react';
import { withRouter} from 'react-router-dom'

class PostForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = props.question;
    this.currentUser = props.currentUser;
    this.question = props.question;
    this.update = this.update.bind(this);
    this.handleCreateSubmit = this.handleCreateSubmit.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleCreateSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("question[question]", this.state.question);
    formData.append(
      "question[author_id]",
      this.state.author_id
    );
    formData.append("question[topic_id]", this.state.topic_id);
    if (this.state.photoFile) {
      formData.append("question[photo]", this.state.photoFile);
    }
    if (this.state.question.length > 0) {
      this.props.action(formData).then((value) => {
        this.props.closeModal(value.payload.question.id);
      if (value.payload.question.id) {
        this.props.history.push(`/question/${value.payload.question.id}`)     
        }
      });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.props.formType === 'Delete Question' || this.state.question.length > 0) {
        const value = this.props.formType === 'Update Question' ?
         Object.assign({}, this.state) : this.props.question.id
        this.props.action(value).then(() => {
        if (this.props.formType === "Delete Question") {this.props.history.push("/main");}
          this.props.closeModal();
        });
      }
  }

  handleFile(e) {
    e.preventDefault();
    this.setState({ photoFile: e.currentTarget.files[0] });
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
            <p>Make sure your question has not been asked already</p>
            <p>Keep your question short and to the point</p>
            <p>Double-check grammar and spelling</p>
          </div>
        </>
      ) : (
        <div className="question-head">
          <h1 className="q-modal-msg">{formType}</h1>
          <i
            className="fa fa-times"
            aria-hidden="true"
            onClick={() => this.props.closeModal()}
          ></i>
        </div>
      );
    
    const handleFunction = this.props.formType === "Create Question" ? this.handleCreateSubmit : this.handleSubmit;

    const display = this.props.formType === "Delete Question" ? "hide-display" : "";
    const size = this.props.formType !== "Create Question" ? "short" : "";
    const showTopic = this.props.formType == "Create Question" ? "show-topic" : "hide-topic";

    const getInput =
      this.props.formType === "Create Question" ? (
        <>
          <input
            type="text"
            placeholder='Start your question with "What","How","Why", etc'
            onChange={this.update("question")}
          />
          <input 
            type="file"
            onChange={this.handleFile.bind(this)}/>
        </>
      ) : (
        <textarea id={display} value={this.state.question} onChange={this.update("question")} cols="30" rows="2"></textarea>
      );

    const message = 
      this.props.formType === "Delete Question" ? "Would you like to delete this question?" : `${this.currentUser.first_name} asked`

    return (
      <div className="question-modal" id={size}>
        {createReminder}
        <form className="modal-q-form">
          <div className="modal-user">
            <h2 className="q-form-header">
              {message}
            </h2>
          </div>
          {getInput}
        </form>
        <div className="q-form-btn">
           <button onClick={handleFunction}>{formType}</button>
           <select className={showTopic} name="topic-select" id="slct" onChange={this.update("topic_id")}>
             {topicDropDown}
           </select> 
        </div>
      </div>
    );
  }
}



export default withRouter(PostForm);