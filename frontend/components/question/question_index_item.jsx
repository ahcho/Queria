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

    hasProfilePhoto() {
        if (this.props.location === 'profile') {
            return null;
        } else {
            if (this.props.question.author.profilePhotoUrl) {
                if (this.props.currentUserId === this.props.question.author_id) {
                    return <Link to={`/profile/${this.props.question.author_id}`}>
                                <img id='answer-profile-photo' src={this.props.question.author.profilePhotoUrl} />
                            </Link>;
                } else {
                    return <img id='answer-profile-photo' src={this.props.question.author.profilePhotoUrl} />
                }
            } else {
                return <i id='answer-profile-icon' className="fas fa-user-circle"></i>;
            }
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
                        {this.hasProfilePhoto()}
                    </div>
                    <div className="sqt-right">
                        <h1>{question.author.first_name} {question.author.last_name} asked:</h1>
                        <h2>{question.created_at.slice(0, 10)}</h2>
                    </div>
                    
                </div>
                <div className='question-index-bottom'>
                    <Link to={`/question/${this.props.question.id}`}>
                        <div className="question-detail">
                            <h2 key={question.id}>{question.question}</h2>
                        </div>
                    </Link>
                    <div className='question-info'>
                        <p className='question-topic'>#test</p>
                        <div className='question-detail-box'>
                            <i className="far fa-comment"></i> 
                            {/* <i className="fas fa-heart"></i> */}
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default QuestionIndexItem;

