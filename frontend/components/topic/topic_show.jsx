import React from 'react';
import QuestionIndexItem from '../question/question_index_item';
import TopicList from '../topic/topic_list_container';


class TopicShow extends React.Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        this.props.fetchTopics();
        this.props.fetchQuestions();
    };
    
    render() {
        const renderIcon = ["",
            "fa fa-history",
            "fas fa-candy-cane",
            "fas fa-cookie",
            "fas fa-apple-alt",
            "fab fa-fort-awesome"]
        
        const { deleteQuestion, openModal, currentUser, topics, questions, topicId } = this.props;
        if (!topics || topics.length < 6) return null;
        const topic = topics[parseInt(this.props.match.params.id)]

        return (
            <div className='main-page'>
                {/* <div className='main-left'>
                    <TopicList />
                </div> */}
                <div className='main-center'>
                    <div className="topic-header">
                        <i className={renderIcon[topicId]} ></i>
                        <p>{topic.name}</p>
                    </div>
                    {questions.map(
                        (question) => <QuestionIndexItem
                            question={question} deleteQuestion={deleteQuestion} key={question.id}
                            openModal={openModal} currentUserId={currentUser.id} />)}
                </div>
                <div className='main-right'>
                </div>
            </div>
        )
    }
}

export default TopicShow;