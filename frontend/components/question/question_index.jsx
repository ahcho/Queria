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
        //debugger;
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
                        {questions.map(
                            (question) => <QuestionIndexItem 
                                question={question} deleteQuestion={deleteQuestion} key={question.id}
                                openModal={openModal} DisplayQuestioncurrentUserId={currentUser.id}/>)}
                    </div>
                </div>
            </div>
        )
    };
};

export default QuestionIndex;