import React from 'react'; 

class QuestionShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchQuestion(this.props.match.params.questionId);
    }

    render() {
        const { question } = this.props;
        return (
            <div>
                <p className='testing'>{question.question}</p>
            </div>
        )

    }
}

export default QuestionShow;