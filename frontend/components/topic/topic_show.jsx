import React from 'react';
import QuestionIndexItem from '../question/question_index_item';
import TopicList from '../topic/topic_list_container';


class TopicShow extends React.Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        this.props.fetchTopics();
         
        this.props.fetchTopic(parseInt(this.props.match.params.id));
    };

    // componentDidUpdate() {
    //     this.props.fetchTopic(parseInt(this.props.match.params.id));        
    // }



    render() {
        const renderIcon = ["",
            "fa fa-history",
            "fas fa-candy-cane",
            "fas fa-cookie",
            "fas fa-apple-alt",
            "fab fa-fort-awesome"]
        
        const photos= ["history", "history", "products", "recipe", "health", "tour"]
        const { deleteQuestion, openModal, currentUser, topics } = this.props;
        if (!topics || topics.length < this.props.match.params.id) return null;
        const topic = topics[parseInt(this.props.match.params.id)]
         
        let questions = []
        if (topic.questions !== undefined) {
            questions = Object.values(topic.questions); 
        } 
        return (
            <div className='main-page'>
                {/* <div className='main-left'>
                    <TopicList />
                </div> */}
                <div className='main-center'>
                    <div className="topic-header">
                        {/* <img src='/Users/habin/Desktop/Queria/app/assets/images/history.jpg' alt=""/> */}
                        <i className={renderIcon[topic.id]} ></i>
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