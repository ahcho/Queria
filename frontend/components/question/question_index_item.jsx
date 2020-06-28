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
                    <h2>{question.question}</h2>
                </div>
                <div className="question-detail">
                    
                </div>

            </div>
        )
    }
}

export default QuestionIndexItem;