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

    handleDeleteQuestion() {
        this.props.openModal('deletequestion', this.props.question)
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

    hasProfilePhoto() {
        if (this.props.location === 'profile') {
            return null;
        } else {
            if (this.props.question.author.profilePhotoUrl) {
                if (this.props.currentUserId === this.props.question.author_id) {
                    // return <Link to={`/profile/${this.props.question.author_id}`}>
                    //             <img id='answer-profile-photo' src={this.props.question.author.profilePhotoUrl} />
                    //         </Link>;
                    return <img id='answer-profile-photo' src={this.props.question.author.profilePhotoUrl} />
                } else {
                    return <img id='answer-profile-photo' src={this.props.question.author.profilePhotoUrl} />
                }
            } else {
                return <i id='answer-profile-icon' className="fas fa-user-circle"></i>;
            }
        }
    }

    render() {
        const { question, location } = this.props;
        if (!question ) return null;
        
        const loc = location === "topic-show" ?  "topic" : ""
        const numOfAnswers = question.answers ? Object.values(question.answers).length : 0;
        return (
            <div className="question-index-item" id={loc}>
                {this.userIconDisplay(question.id)}
                <Link to={`/question/${this.props.question.id}`}>
                
                <div className="sqt-left">
                    {this.hasProfilePhoto()}
                </div>
                {/* <Link to={`/question/${this.props.question.id}`}> */}
                <div className="single-question-top">
                    
                    <div className="sqt-right">
                        <h1>{question.author.first_name} {question.author.last_name} asked:</h1>
                        <h2>{question.created_at.slice(0, 10)}</h2>
                    </div>              
                </div>
                </Link>
                
                <div className='question-index-bottom'>
                    <Link to={`/question/${this.props.question.id}`}>
                        <div className="question-detail">
                            <h2 key={question.id}>{question.question}</h2>
                        </div>
                    </Link>
                    <div className='question-info'>
                        <Link
                            to={`/topic/${question.topic_id}`}
                            className='question-topic'
                            > #{question.topic.name}
                        </Link>
                        {/* <Link to={`/question/${this.props.question.id}`}> */}
                            <div className='question-detail-box'>
                                {numOfAnswers}
                                <i className="far fa-comment"></i> 
                                {/* <i className="fas fa-heart"></i> */}
                            </div>
                        {/* </Link> */}
                    </div>
                </div>
                
            </div>
        )
    }
}

export default QuestionIndexItem;

