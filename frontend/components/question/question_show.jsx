import React from 'react'; 
import CreateAnswerContainer  from './../answers/create_answer_container';
import AnswerIndexContainer from './../answers/answer_index_container';

class QuestionShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dropDown: false,
            answers: [],
            counts: 0,
            upClick: false,
            downClick: false
        }        
        this.handleDropDown = this.handleDropDown.bind(this);
        this.handleEditQuestion = this.handleEditQuestion.bind(this);
        this.handleDeleteQuestion = this.handleDeleteQuestion.bind(this);
    }

    handleDropDown() {
        this.setState({dropDown: !this.state.dropDown})
    }

    componentDidMount() {
        this.props.fetchQuestion(this.props.match.params.questionId);
        this.props.fetchAnswers(this.props.match.params.questionId);
    }

    componentDidUpdate(prevProps) {
       
        if (prevProps.question && this.props.question && prevProps.question.id !== this.props.question.id) {
            this.props.fetchAnswers(this.props.match.params.questionId);
        }
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
        this.props.openModal('deletequestion', this.props.question); 
    }

    handleCounter(val) {
        let count = this.state.counts;
        if (val) {
            this.setState({counts: count + 1, upClick: val, downClick: !val})
        } else {
            this.setState({counts: count - 1, downClick: !val, upClick: val})
        }
        
    }
    handleSameAuthor() {
        if (this.props.currentUser.id === this.props.question.author.id) {
            return (
                <div className='right'>
                    <i className="far fa-edit" onClick={this.handleEditQuestion}>
                        <span className='tooltip'>Edit</span>
                    </i>
                    <i className="fas fa-times" onClick={this.handleDeleteQuestion}>
                        <span className='tooltip'>Delete</span>
                    </i>
                </div>
            )
        }
    }

    render() {
        const { currentUser, question, answers } = this.props;
        const hasUp = this.state.hasUp ? "UP" : "DOWN" ;
        if (!question ) return null;
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
                        {!this.state.upClick ? <button onClick={this.handleCounter.bind(this, true)}> UP </button> : null}
                        {this.state.upClick ? <button onClick={this.handleCounter.bind(this, false)}> DOWN </button> : null }
                        {this.state.counts}
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