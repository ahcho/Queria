import React from 'react';
import { Link } from 'react-router-dom';

class QuestionIndexItem extends React.Component {

    constructor(props){
        super(props);
        this.handleEditQuestion = this.handleEditQuestion.bind(this);
    }

    handleEditQuestion() {
        this.props.openModal('editquestion', this.props.question)
    }

    userIconDisplay(targetId) {

        if (this.props.currentUserId === this.props.question.author_id) {
            return (
                <div className='right'>
                    <i className="far fa-edit" onClick={this.handleEditQuestion}></i>
                    <i className="fas fa-times" onClick={() => this.props.deleteQuestion(targetId)}></i>
                </div>
            )
        }

    }
    
    render() {
        const { question } = this.props;
        if (!question ) return null;
        return (
            <div className="question-index-item">
                {this.userIconDisplay(question.id)}
                <div className="single-question-top">
                    <div className="sqt-left">
                        <i className="fas fa-user-circle">  </i>
                    </div>
                    <div className="sqt-right">
                        <h1>{question.author.first_name} {question.author.last_name} asked:</h1>
                        <h2>{question.created_at.slice(0, 10)}</h2>
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

