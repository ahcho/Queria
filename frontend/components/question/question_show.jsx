import React from 'react'; 
import CreateAnswerContainer  from './../answers/create_answer_container';
import AnswerIndex from './../answers/answer_index';

class QuestionShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dropDown: false
        }
        this.handleDropDown = this.handleDropDown.bind(this);
    }

    handleDropDown(e) {
        this.setState({dropDown: !this.state.dropDown})
    }

    componentDidMount() {
        this.props.fetchQuestion(this.props.match.params.questionId);
    }

    render() {

        const { answers, currentUser, deleteAnswer, updateAnswer, question, users } = this.props;
        const banana = this.state.dropDown ? "" : "hidden" ;

        if (!currentUser || !answers || !question ) return null;

        debugger
        return (
            <div>
                <div className='q-show-header'>
                    <h1>{question.question}</h1>
                    <p>{question.author.first_name} asked</p>
                    <p>{question.created_at.slice(0, 10)} at {question.created_at.slice(11, 16)}</p>
                </div>
                <div className='q-answer-box'>
                    <p>{this.props.currentUser.first_name}, can you answer this question?</p>
                    <p>people are searching for an answer to this question.</p>
                    <button onClick={this.handleDropDown}>Answer</button>
                    <div className={banana} id="answer-box">
                        <CreateAnswerContainer currentUserId={currentUser.id} questionId={question.id}
                            handleDropDown={this.handleDropDown}/>
                    </div>
                </div>
                <div className='display-answer-box'>
                    <div>
                        <AnswerIndex answers={answers} currentUser={currentUser} users={users} deleteAnswer={deleteAnswer} updateAnswer={updateAnswer} />
                    </div>
                </div>
            </div>
        )
    }
}

export default QuestionShow;