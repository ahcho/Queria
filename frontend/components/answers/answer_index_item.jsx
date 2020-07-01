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
        const {answer, author} = this.props;
        if (!answer || !author) return null
        return (
            <div className='single-answer-box'>
                <div className='snb-top'>
                    <i className="fa fa-user-circle" aria-hidden="true"></i>  
                    <p>{author.first_name} {author.last_name}</p>                              
                    <p>{answer.updated_at.slice(0, 10)} at {answer.updated_at.slice(11, 16)}</p>
                </div>
                <div className='snb-body'>
                    <p>{answer.body}</p>
                </div>
            </div>
        )
    }

        
}

export default AnswerIndexItem;
