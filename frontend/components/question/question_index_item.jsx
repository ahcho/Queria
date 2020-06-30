import React from 'react';
import { Link } from 'react-router-dom';

class QuestionIndexItem extends React.Component {

    constructor(props){
        super(props);
        this.handleEditQuestion = this.handleEditQuestion.bind(this);
    }

    handleEditQuestion() {
        this.props.openModal('editquestion')
    }
    
    render() {

        const {question, deleteQuestion, currentUserId} =this.props;
        return (
            <div className="question-index-item">
                <div className="right" >
                    <i className="far fa-edit" onClick={this.handleEditQuestion}></i>
                    <i className="fas fa-times" onClick={() => deleteQuestion(question.id)}></i>
                </div>
                <div className="question-top">
                    <div className="left">
                        <h1>{question.author.first_name} {question.author.last_name} asked:</h1>
                    </div>
                    
                </div>
                <Link to={`/question/${this.props.question.id}`}>
                    <div className="question-detail">
                        <h2 key={question.id}>{question.question}</h2>
                    </div>
                </Link>

            </div>
        )
    }
}

export default QuestionIndexItem;

/* <Link to={`/question/$this.props.question.id`}>
    <div onClick={this.handleEditQuestion} className="question-detail">
        <h2 key={question.id}>{question.question}</h2>
    </div></Link> */