import React from 'react'; 
import AnswerIndex from './../answers/answer_index';


class QuestionShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchQuestion(this.props.match.params.questionId);
    }

    render() {
        debugger
        const { answers, currentUser, deleteAnswer, updateAnswer, question, users  } = this.props;
        if (!currentUser || !answers || !question ) return null;
        return (
            <div>
                <div className='q-show-header'>
                    <p>{question.author.first_name} asked</p>
                    <p>{question.created_at}</p>
                    <p>{question.question}</p>
                </div>
                <div className='q-answer-box'>
                    <p>{this.props.currentUser.first_name}, can you answer this question?</p>
                    <p>people are searching for an answer to this question.</p>
                    <button>Answer</button>
                </div>
                <div className='display-answer-box'>
                    <div>This is where all the answers will be displayed,
                    later I will add AnswerIndex. 
                    Errrrrrrrrr!!
                        <AnswerIndex answers={answers} deleteAnswer={deleteAnswer}
                            currentUserId={currentUser.id}
                            users={users}
                        />
                    </div>
                </div>
            </div>
        )

    }
}

export default QuestionShow;