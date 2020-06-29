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
        
        return (
            <div>
                <div>
                    <div className="main-question-modal-trigger" >
                        <div id="main-asking-user" onClick={() => openModal('createquestion')}>Hello {currentUser.first_name + " " + currentUser.last_name}</div>
                        <br/>
                        <div id="main-asking-user-input"
                            onClick={() => openModal('createquestion')}> ask me a question
                        </div>   
                    </div>
                    <div className="question-index">
                        {questions.map(
                            (question) => <QuestionIndexItem 
                                            question={question} deleteQuestion={deleteQuestion} key={question.id}
                                            currentUserId={currentUser.id}/>)}
                    </div>
                </div>
            </div>
        )
    };
};

export default QuestionIndex;