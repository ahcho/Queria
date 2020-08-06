import React from 'react';
import QuestionIndexItem from '../question/question_index_item';
import AnswerIndexItem from '../answers/answer_index_item';
import { Link } from 'react-router-dom';

class Profile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showAnswer: false
        }
        this.questions = this.props.questions;  
        this.handleFollow = this.handleFollow.bind(this);  
        this.handleClick = this.handleClick.bind(this);
    } 

    componentDidMount() {
        this.props.fetchUser(this.props.match.params.userId);
    }

    handleClick() {
        this.setState({showAnswer: !this.state.showAnswer})  
    }
    
    handleFollow() {
        console.log("follow button click")
    }

    render() {
        const {questions, answers, user, deleteQuestion, openModal,
        deleteAnswer, updateAnswer, createComment} = this.props;
        
        const renderQuestions = 
             this.state.showAnswer ? (
                <div className="answer-index-box">
                    {
                        answers.map(
                            (answer) => {
                                return (
                                    <AnswerIndexItem
                                        author={user}
                                        answer={answer}
                                        deleteAnswer={deleteAnswer}
                                        updateAnswer={updateAnswer}
                                        key={answer.id}
                                        currentUser={user}
                                        createComment={createComment}
                                    />)
                            })
                    }
                </div>
            ) : (<div className="question-index">
                    {questions.map(
                        (question) => <QuestionIndexItem
                            question={question} deleteQuestion={deleteQuestion} key={question.id}
                            openModal={openModal} currentUserId={user.id} />)}
                </div>)

        return (
            <div className='profile-page'>
                <div className='profile-top'>
                    <i id='profile-img' className="fas fa-user-astronaut"></i>
                    <h1 id='profile-name'>{this.props.user.first_name} {this.props.user.last_name}</h1>
                    <button onClick={this.handleFollow}>follow</button>
                </div>
                <ul className='profile-list'>
                    <a id='user-questions' onClick={this.renderQuestions}>{questions.length} Questions</a>
                    <a id='user-answers' onClick={this.handleClick}>{answers.length} Answers</a>
                </ul>
                {renderQuestions}   
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

