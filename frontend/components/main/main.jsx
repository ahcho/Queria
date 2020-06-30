import React from 'react';
import { Link } from 'react-router-dom';
import LeftBar from '../left_bar/left_bar';
import QuestionIndexContainer from '../question/question_index_container';
import CreateQuestion from '../question/create_question_container';

class MainPage extends React.Component {

    constructor(props){
        super(props);
        this.user = this.props.currentUser;
    }

    render() {
        ////debugger;
        
        return (
            <div className='main-page'>
                <div className='main-left'>
                    <LeftBar />
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