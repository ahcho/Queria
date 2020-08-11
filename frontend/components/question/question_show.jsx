import React from 'react'; 
import CreateAnswerContainer  from './../answers/create_answer_container';
import AnswerIndexContainer from './../answers/answer_index_container';

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

    questionPhotoAttached() {
        // debugger
        if (this.props.question.questionPhotoUrl) {
            // debugger
            return (
                <img src={this.props.question.questionPhotoUrl} src="" />
            )
        } else {
            return (
                <img src="https://images.unsplash.com/photo-1567206563064-6f60f40a2b57?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80"/>
            )
        }
    }

    render() {
        const { currentUser, question } = this.props;
        const dropdown = this.state.dropDown ? "" : "hidden" ;
        if (!question ) return null;
        return (
            <div>
                <div className='q-show-header'>
                    <p>{question.author.first_name} asked</p>
                    <p>{question.created_at.slice(0, 10)} at {question.created_at.slice(11, 16)}</p>
                    <h1>{question.question}</h1>
                    {this.questionPhotoAttached()}
                </div>
                <div className='q-answer-box'>
                    <p>{this.props.currentUser.first_name}, can you answer this question?</p>
                    <p>people are searching for an answer to this question.</p>
                    <button onClick={this.handleDropDown}>Answer</button>
                    <div className={dropdown} id="answer-box">
                        <CreateAnswerContainer 
                            currentUserId={currentUser.id} 
                            questionId={question.id}
                            handleDropDown={this.handleDropDown}/>
                    </div>
                </div>
                <div className='display-answer-box'>
                    <div>
                        <AnswerIndexContainer />
                    </div>
                </div>
            </div>
        )
    }
}

export default QuestionShow;