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

        if (!this.props.currentUser) {
            return null;
        }

        debugger;

        const { questions, currentUser, openModal } = this.props;

        return (
            <div>
                <div>
                    <div className="ask-question-box">
                        <div id="asking-user">{currentUser.first_name + " " + currentUser.last_name}</div>
                        <div id="main-question">
                            <input type="text" placeholder="What is your Question?" onClick={() => openModal('createquestion')}/>
                        </div>    
                    </div>
                    <div className="question-index">
                        {questions.map((question) => <QuestionIndexItem question={question} key={question.id}/>)}
                    </div>
                </div>
            </div>
        )
    };
};

export default QuestionIndex;