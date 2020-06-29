import React from 'react';
import QuestionIndexItem from '../question/question_index_item';




class Profile extends React.Component {

    constructor(props) {
        super(props);
        //this.questions = Object.values(this.props.user.questions)
    } 
    componentDidMount() {
        this.props.fetchUser(this.props.match.params.userId);
    }

    render() {

    
        return (
            <div className='profile-page'>
                <div className='profile-top'>
                    <i className="fa fa-user-circle-o" aria-hidden="true"></i>
                    <h1>Username is {this.props.user.first_name}</h1>
                </div>
                <div className='profile-description'>
                    <p>Write a description about yourself</p>
                </div>
                <div className='profile-list'>
                    <p>Followers</p>
                    <p>Answers</p>
                    <p>Questions</p>
                </div>
                
                <div className='profile-bottom'>
                    <button className='profile-answer-btn'>Answer Questions</button>
                </div>
            </div>
        )
    }
}

export default Profile;