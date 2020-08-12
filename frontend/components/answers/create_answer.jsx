import React from "react";

class CreateAnswer extends React.Component {

    constructor(props) {
        super(props)
        this.currentUserId = this.props.currentUserId
        this.questionId = this.props.questionId
        this.state = {
            body: "",
            author_id: this.currentUserId,
            question_id: this.questionId,
            photoFile: null
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    handleInput(field) {
        return (e) => { this.setState({ [field]: e.target.value }) }
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.state.body.length > 0) {
            const formData = new FormData();
            formData.append("answer[body]", this.state.body);
            formData.append("answer[author_id]", this.currentUserId);
            formData.append("answer[question_id]", this.questionId);
            if (this.state.photoFile) {
              formData.append("answer[photo]", this.state.photoFile);
            }
            this.props.createAnswer(formData);
            this.props.handleDropDown(e);
            this.setState({ body: "" });
        }
        // if (this.state.body.length > 0) {
        //     this.props.createAnswer(this.state)
        //     this.props.handleDropDown(e);
        //     this.setState({ "body": "" });
        // }
    }

    handleFile(e) {
        e.preventDefault();
        this.setState({ photoFile: e.currentTarget.files[0]});
    }

    render () {
        return (
          <form className="answer-form" onSubmit={this.handleSubmit}>
            <textarea
              className="single-answer"
              rows="10"
              cols="50"
              value={this.state.body}
              onChange={this.handleInput("body")}
              placeholder="Write your answer"
            >
              {this.state.body}
            </textarea>
            <br />
            <input type="file" 
                onChange={this.handleFile.bind(this)} />
            <button className="answer-btn">Submit</button>
          </form>
        );
    }
}

export default CreateAnswer;