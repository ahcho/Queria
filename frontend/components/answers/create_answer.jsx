import React from "react";

class CreateAnswer extends React.Component {

    constructor(props) {
        super(props)
        this.currentUserId = this.props.currentUserId
        this.questionId = this.props.questionId
        this.state = {
            body: "",
            author_id: this.currentUserId,
            question_id: this.questionId
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
            this.props.createAnswer(this.state)
            this.props.handleDropDown(e);
            this.setState({ "body": "" });
        }
    }

    render () {
        return (
            <form className="answer-form" onSubmit={this.handleSubmit}>
                <textarea id="answerBox" 
                rows="10" 
                cols="50" 
                value={this.state.body}
                onChange={this.handleInput("body")} 
                placeholder="Write your answer">
                    {this.state.body}
                </textarea>
                <br/>
                <button className="answer-btn">Submit</button>
            </form>
        )
    }
}

export default CreateAnswer;