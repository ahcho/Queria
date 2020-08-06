import React from "react";
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import entryContainer from './entry_form/entry_container';
import mainContainer from './main/main_container'
import navBarContainer from './nav_bar/nav_bar_container';
import Modal from './modal/modal';
import ProfileContainer from './profile/profile_container'
import QuestionShow from './question/question_show_container'
import TopicShow from './topic/topic_show_container'
import { logger } from 'redux-logger';


const App = () => (
    
    <div>
        <Modal /> 
        <ProtectedRoute path="/" component={navBarContainer} />
            <Switch>
                <Route path="/question/:questionId" component={QuestionShow} />
                <Route path="/topic/:id" component={TopicShow} /> 
                <ProtectedRoute path="/profile/:userId" component={ProfileContainer} />
                <ProtectedRoute path="/main" component={mainContainer} />
                <AuthRoute exact path="/" component={entryContainer} />  
                <AuthRoute component={entryContainer} />     
            </Switch>

    </div>

);


export default App;