import React from 'react';
import { Link } from 'react-router-dom';

class AnswerIndexItem extends React.Component {

    constructor(props) {
        super(props);
        //this.handleEditAnswer = this.handleEditAnswer.bind(this);
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

    // handleEditQuestion() {
    //     this.props.openModal('editquestion')
    // }

    // userIconDisplay(targetId) {
    //     if (this.props.currentUserId === this.props.question.author_id) {
    //         return (
    //             <div className='right'>
    //                 <i className="far fa-edit" onClick={this.handleEditQuestion}></i>
    //                 <i className="fas fa-times" onClick={() => this.props.deleteQuestion(targetId)}></i>
    //             </div>
    //         )
    //     }

    // }

    render() {
        //debugger
        const {answer, author} = this.props;
        //if (!answer || !author) return null
        if (!answer) return null
        return (
            <div className='single-answer-box'>
                <p>{answer.updated_at.slice(0, 10)} at {answer.updated_at.slice(11, 16)}</p>
                <p>{answer.body}</p>
            </div>
        )
    }

        
}

export default AnswerIndexItem;

/* <Link to={`/question/$this.props.question.id`}>
    <div onClick={this.handleEditQuestion} className="question-detail">
        <h2 key={question.id}>{question.question}</h2>
    </div></Link> */