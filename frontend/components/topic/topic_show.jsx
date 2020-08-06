import React from 'react';
import QuestionIndexItem from '../question/question_index_item';


class TopicShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchTopic(parseInt(this.props.match.params.id));
    };
    

    render() {
        const {questions, deleteQuestion, openModal, currentUser, topics} = this.props;
        if (!topics) return null;
        const topic = topics[parseInt(this.props.match.params.id)]
        return (
            <div className="topic-show-container">
                <br/>
                <br/>
                <br/>
                <br/>
                <div className="topic-header">{topic.name}</div>
                {questions.map(
                    (question) => <QuestionIndexItem
                        question={question} deleteQuestion={deleteQuestion} key={question.id}
                        openModal={openModal} currentUserId={currentUser.id} />)}
            </div>
        )
    }
}

export default TopicShow;