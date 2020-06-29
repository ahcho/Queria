import React from 'react';

class Profile extends React.Component {

    constructor(props) {
        super(props);
        this.questions = this.props.questions;  
        this.renderQuestions = this.renderQuestions.bind(this);  
    } 

    componentDidMount() {
        this.props.fetchUser(this.props.match.params.userId);
    }

    renderQuestions() {
        debugger;
        return (
            <div>
                {this.questions.map((question) => <QuestionIndexItem question={question} key={question.id} />)}
            </div>
        )
    }

    renderAnswers() {

    }

    render() {

        return (
            <div className='profile-page'>
                <div className='profile-top'>
                    <i id='profile-img' className="fas fa-user-astronaut"></i>
                    <h1 id='profile-name'>{this.props.user.first_name} {this.props.user.last_name}</h1>
                </div>
                <div className='profile-description'>
                    <p>Write a description about yourself</p>
                </div>
                <ul className='profile-list'>
                    <li id='user-questions' onClick={() => this.renderQuestions()}>Questions</li>
                    <li id='user-answers'>Answers</li>
                    <li>Followers</li>
                    <li>Following</li>
                </ul>
                
                <div className='profile-bottom'>
                    <button className='profile-answer-btn'>Answer Questions</button>
                </div>
            </div>
        )
    }
}

export default Profile;