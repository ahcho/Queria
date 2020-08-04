import React from 'react';
import QuestionIndexItem from '../question/question_index_item';


class TopicShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        //parseInt(this.props.match.params.id);
        this.props.fetchTopic(parseInt(this.props.match.params.id));
    };

    render() {
        const {questions, deleteQuestion, openModal, currentUser} = this.props;
        return (
            <div className="topic-show-container">
                <br/>
                <br/>
                <br/>
                <br/>
                {questions.map(
                    (question) => <QuestionIndexItem
                        question={question} deleteQuestion={deleteQuestion} key={question.id}
                        openModal={openModal} currentUserId={currentUser.id} />)}
            </div>
        )
    }
}

export default TopicShow;