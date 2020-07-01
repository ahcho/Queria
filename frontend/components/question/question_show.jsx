import React from 'react'; 
import AnswerIndex from './../answers/answer_index';
import CreateAnswerContainer  from './../answers/create_answer_container'


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
        const { answers, currentUser, deleteAnswer, updateAnswer, question, users  } = this.props;
        const banana = this.state.dropDown ? "" : "hidden" ;
        if (!currentUser || !answers || !question ) return null;
        //debugger
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
                    <button onClick={this.handleDropDown}>Answer</button>
                    <div className={banana}>
                        <CreateAnswerContainer currentUserId={currentUser.id} questionId={question.id}/>
                    </div>






                </div>
                <div className='display-answer-box'>
                    <div>This is a box where all the answers will be displayed,
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