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
        this.handleSumbit = this.handleSumbit.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    handleInput(field) {
        return (e) => { this.setState({ [field]: e.target.value }) }
    }

    handleSumbit(e) {
        e.preventDefault();
        this.props.createAnswer(this.state)
        this.props.handleDropDown(e);
    }

    render () {
        
        return (
            <form className="answer-form" onSubmit={this.handleSumbit}>
                <textarea id="answerBox" rows="10" cols="60" value={this.state.body}
                onChange={this.handleInput("body")} placeholder="Write your answer">
                    {this.state.body}
                </textarea>
                <br/>
                <button className="answer-btn">Submit</button>
            </form>
        )
    }
}

export default CreateAnswer;