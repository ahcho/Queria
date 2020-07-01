import React from 'react';
import { Link } from 'react-router-dom';

// (answer) => <AnswerIndexItem
//     answer={answer} deleteAnswer={deleteAnswer} key={answer.id}
//     openModal={openModal} currentUserId={currentUser.id}
//     users={users} />)}
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
        const {answer} = this.props;
        if (!answer) return null

        return (
            <div className='single-answer-box'>
                <p>{answer.updated_at}</p>
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