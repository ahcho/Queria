import React from 'react';
import QuestionIndexItem from '../question/question_index_item';
import { Link } from 'react-router-dom';

class Profile extends React.Component {

    constructor(props) {
        super(props);
        this.questions = this.props.questions;  
        this.renderQuestions = this.renderQuestions.bind(this);  
    } 

    componentDidMount() {
        this.props.fetchUser(this.props.match.params.userId);
    }

    renderQuestions(e) {
        return (
            <div className="question-index">
                {this.props.questions.map((question) => <QuestionIndexItem question={question} key={question.id} />)}
            </div>
        )
    }

    renderAnswers() {

    }


    render() {
        const {answers, questions} = this.props;
        
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
                    <li id='user-questions' onClick={this.renderQuestions}>{questions.length} Questions</li>
                    <li id='user-answers'>{answers.length} Answers</li>
                    <li>0 Followers</li>
                    <li>0 Following</li>
                </ul>
                
                <div className='profile-bottom'>
                    <Link className="plain" to='/'><button className='profile-answer-btn'>Answer Questions</button></Link>
                </div>
            </div>
        )
    }
}

export default Profile;


{/* <div className='profile-bottom'>
    <Link className="plain" to='/'>
        <button className='profile-answer-btn'>Answer Questions</button>
    </Link>
</div> */}