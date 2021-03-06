import React from 'react';
import QuestionIndexItem from '../question/question_index_item';
import AnswerIndexItem from '../answers/answer_index_item';
import EditProfileContainer from './edit_profile_container'

class Profile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showAnswer: false,
            showQuestion: true,
            photoFile: null,
            answers: null
        }
        this.questions = this.props.questions;  
        this.handleShowQuestion = this.handleShowQuestion.bind(this);
        this.handleShowAnswer = this.handleShowAnswer.bind(this);
    } 
    // using slide of hand, they are thinking they are accessing to new page
    // this.props."match" it's always there
    componentDidMount() {
        this.props.fetchUser(this.props.match.params.userId);
    }

    handleShowAnswer() {
        if (this.state.showAnswer === false) {
            this.setState({ showAnswer: !this.state.showAnswer })
            this.setState({ showQuestion: !this.state.showQuestion })
        }
    }

    handleShowQuestion () {
        if (this.state.showQuestion=== false) {
            this.setState({ showAnswer: !this.state.showAnswer })
            this.setState({ showQuestion: !this.state.showQuestion })
        }
    }
    
    render() {
        const {questions, user, deleteQuestion, openModal,
        deleteAnswer, updateAnswer, createComment} = this.props;
  
        const userQuestions = questions.filter(
            (question) => question.author_id === user.id
        ).reverse()
        const answers = this.props.answers
        
        const renderQuestions = 
             this.state.showAnswer ? (
                <div className="profile-answer-index-box">
                    {
                        answers.reverse().map(
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
                                        location='profile'
                                    />)
                            })
                    }
                </div>
            ) : (<div className="question-index">
                    {userQuestions.map(
                        (question) => <QuestionIndexItem
                            location="profile"
                            question={question} deleteQuestion={deleteQuestion} key={question.id}
                            openModal={openModal} currentUserId={user.id} location='profile'/>)}
                </div>)

        return (
            <div className='profile-page'>
                <EditProfileContainer />
                <ul className='profile-list'>
                    <a id='user-questions' onClick={this.handleShowQuestion}>{userQuestions.length} Questions</a>
                    <a id='user-answers' onClick={this.handleShowAnswer}>{answers.length} Answers</a>
                    <a id='user-answers' onClick={this.handleShowAnswer}>5 Followers</a>
                    <a id='user-answers' onClick={this.handleShowAnswer}>7 Followings</a>
                </ul>
                {renderQuestions}   
            </div>
        )
    }
}

export default Profile;



