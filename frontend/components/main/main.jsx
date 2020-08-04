import React from 'react';
import { Link } from 'react-router-dom';
import QuestionIndexContainer from '../question/question_index_container';
import TopicList from '../topic/topic_list_container';
class MainPage extends React.Component {

    constructor(props){
        super(props);
        this.user = this.props.currentUser;
    }

    render() {
        
        return (
            <div className='main-page'>
                <div className='main-left'>
                    <TopicList />
                </div>
                <div className='main-center'>
                    <QuestionIndexContainer />
                </div>
                <div className='main-right'>
                </div>   
            </div>
        )
    }
}

export default MainPage