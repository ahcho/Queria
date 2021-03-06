import React from 'react';
import QuestionIndexItem from './question_index_item';


class QuestionIndex extends React.Component {

    constructor(props) {
        super(props);    
    };

    componentDidMount() {
        this.props.fetchQuestions();
    };

    render() {
        const { questions, currentUser, openModal, deleteQuestion } = this.props;
        if (!questions || !currentUser) return null;
        return (
            <div>
                <div>
                    <div onClick={() => openModal('createquestion')} className="main-question-modal-trigger" >
                        <div id="main-asking-user" >
                            Hello {currentUser.first_name + " " + currentUser.last_name}</div>
                        <div id="main-asking-user-input">What is your question?
                        </div>   
                    </div>
                    <div className="question-index">
                        {questions.reverse().map(
                            (question) => <QuestionIndexItem 
                                location="question-index"
                                key={question.id}
                                question={question} 
                                deleteQuestion={deleteQuestion} 
                                openModal={openModal} 
                                currentUserId={currentUser.id}/>)}
                    </div>
                </div>
            </div>
        )
    };
};

export default QuestionIndex;