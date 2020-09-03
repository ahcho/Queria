import React from 'react'; 
import CreateAnswerContainer  from './../answers/create_answer_container';
import AnswerIndexContainer from './../answers/answer_index_container';

class QuestionShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dropDown: false
        }
        this.handleDropDown = this.handleDropDown.bind(this);
        this.handleEditQuestion = this.handleEditQuestion.bind(this);
        this.handleDeleteQuestion = this.handleDeleteQuestion.bind(this);
    }

    handleDropDown(e) {
        this.setState({dropDown: !this.state.dropDown})
    }

    componentDidMount() {
        this.props.fetchQuestion(this.props.match.params.questionId);
        this.props.fetchAnswers(this.props.match.params.questionId)
    }

    questionPhotoAttached() {
        if (this.props.question.questionPhotoUrl) {
            return (
                <img src={this.props.question.questionPhotoUrl} />
            )
        }
    }

    hasProfilePhoto() {
        if (this.props.question.author.profilePhotoUrl) {
            return <img id='profile-photo-question-show' src={this.props.question.author.profilePhotoUrl} />;
        } else {
            return <i id='profile-img' className="fas fa-user-circle"></i>;
        }
    }

    handleEditQuestion() {
        this.props.openModal('editquestion', this.props.question);
    }

    handleDeleteQuestion() {
        this.props.deleteQuestion(this.props.question.id);
        window.location.replace("http://localhost:3000/#/main");
    }

    handleSameAuthor() {
        if (this.props.currentUser.id === this.props.question.author.id) {
            return (
                <div className='right'>
                    <i className="far fa-edit" onClick={this.handleEditQuestion}></i>
                    <i className="fas fa-times" onClick={this.handleDeleteQuestion}></i>
                </div>
            )
        }
    }

    render() {
        const { currentUser, question, answers } = this.props;
        if (!question ) return null;
        // const isLoggedInUser =
        //     currentUser.id === question.author.id ? "no-answer-box" : "q-answer-box";
        const dropdown = this.state.dropDown ? "" : "hidden" ;
        return (
            <div>
                <div className='q-show-header'>
                    <div className='asker-info'>
                        {this.hasProfilePhoto()}                        
                        <p className="asker-detail">
                        {question.author.first_name} asked<br/><br/>
                        {question.created_at.slice(0, 10)} at {question.created_at.slice(11, 16)}</p>
                        {this.handleSameAuthor()}
                    </div>
                    <h1>{question.question}</h1>
                    {this.questionPhotoAttached()}
                    <p className='question-topic'>#{question.topic.name}</p>
                    <div className='question-detail-box'>
                        <i className="far fa-comment"></i> {answers.length}
                        {/* <i className="fas fa-heart"></i> */}
                    </div>
                </div>
                {/* <div className={isLoggedInUser}> */}
                <div className="q-answer-box">
                    <p>{this.props.currentUser.first_name}, can you answer this question?</p>
                    <p>people are searching for an answer to this question.</p>
                    <button onClick={this.handleDropDown}><i className="fas fa-plus"></i></button>
                    <div className={dropdown}>
                        <CreateAnswerContainer 
                            currentUserId={currentUser.id} 
                            questionId={question.id}
                            handleDropDown={this.handleDropDown}/>
                    </div>
                </div>
                <div className='display-answer-box'>
                    <AnswerIndexContainer 
                       questionId={question.id}/>
                </div>
            </div>
        )
    }
}

export default QuestionShow;