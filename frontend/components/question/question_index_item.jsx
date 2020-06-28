import React from 'react';
import { Link } from 'react-router-dom';

class QuestionIndexItem extends React.Component {

    constructor(props){
        super(props);
    }
    
    render() {
        
        const {question} =this.props;
        return (
            <div>
                <div className="question-top">
                    <h1>author name will be here</h1>
                </div>
                <div className="question-detail">
                    <h2 key={question.id}>{question.question}</h2>
                </div>

            </div>
        )
    }
}

export default QuestionIndexItem;