import React from "react";

class CreateAnswer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            body: ""
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
    }

    render () {
        return (
            <form className="answer-form" onSubmit={this.handleSumbit}>
                <P>I will be the answer form</P>
                <textarea id="answerBox" rows="10" value={this.state.body}
                onChange={this.handleInput("body")}>
                    {this.state.body}
                </textarea>
                <button className="answer-btn">Answer!</button>
                <button className="not-a-btn">Close</button>
            </form>

        )
    }
}

export default CreateAnswer;