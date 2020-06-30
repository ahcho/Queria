import React from 'react'; 

class QuestionShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchQuestion(this.props.match.params.questionId);
    }

    render() {
        if (!this.props.question) return null;
        const { question, answers, users } = this.props;
        return (
            <div>
                <div className='q-show-header'>
                    <p>{question.author.first_name} asked</p>
                    <p>{question.created_at}</p>
                    <p>{question.question}</p>
                </div>
                <ul>
                   
                </ul>
            </div>
        )

    }
}

export default QuestionShow;