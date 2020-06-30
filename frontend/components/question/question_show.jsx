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
                <div className='q-answer-box'>
                    <p>{this.props.cur_user.first_name}, can you answer this question?</p>
                    <p>people are searching for an answer to this question.</p>
                    <button>Answer</button>
                </div>
                <div className='display-answer-box'>
                    <p>This is where all the answer will be displayed</p>
                    
                </div>
            </div>
        )

    }
}

export default QuestionShow;