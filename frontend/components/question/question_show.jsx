import React from 'react'; 
import AnswerIndexItem from '../answers/answer_index_item';

class QuestionShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchQuestion(this.props.match.params.questionId);
    }

    render() {
        debugger;
        const { question, answers, users } = this.props;
        return (
            <div>
                <div className='q-show-header'>
                    <p>{users[question.author_id].first_name} asked</p>
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