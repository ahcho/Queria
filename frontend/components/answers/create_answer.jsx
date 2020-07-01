import React from "react";

class CreateAnswer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            body: ""
        }
    }

    render () {
        return (
            <form className="answer-form">
                <P>I will be the answer</P>
            </form>

        )
    }
}

export default CreateAnswer;