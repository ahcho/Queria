import React from 'react'; 

class QuestionShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchQuestion(this.props.match.params.questionId);
    }

    render() {
        debugger;
        const { question } = this.props;
        return (
            <div>
                <p className='testing'>I want to print this</p>
                
            </div>
        )

    }
}

export default QuestionShow;