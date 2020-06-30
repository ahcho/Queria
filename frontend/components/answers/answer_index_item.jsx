import React from 'react';
import { Link } from 'react-router-dom';

class AnswerIndexItem extends React.Component {

    constructor(props) {
        super(props);
        //this.handleEditAnswer = this.handleEditAnswer.bind(this);
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
        return (
            <div>
                
                
            </div>
        )
    }

        
}

export default AnswerIndexItem;

/* <Link to={`/question/$this.props.question.id`}>
    <div onClick={this.handleEditQuestion} className="question-detail">
        <h2 key={question.id}>{question.question}</h2>
    </div></Link> */