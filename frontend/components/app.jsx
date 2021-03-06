import React from "react";
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import entryContainer from './entry_form/entry_container';
import mainContainer from './main/main_container'
import navBarContainer from './nav_bar/nav_bar_container';
import Modal from './modal/modal';
import ProfileContainer from './profile/profile_container';
import QuestionShow from './question/question_show_container';
import TopicShow from './topic/topic_show_container';
import footerContainer from './footer/footer';


/// I didn't send a request to data
// it reads my url and send the userId to profile container
// going to mount the componenet thunk action and api util return .then triggers
// capture by reducer
const App = () => (
    
    <div className="app-page">
        <Modal /> 
        <ProtectedRoute path="/" component={navBarContainer} />
        <ProtectedRoute path="/" component={footerContainer} />
            <Switch>
                <ProtectedRoute path="/question/:questionId" component={QuestionShow} />
                <ProtectedRoute path="/topic/:id" component={TopicShow} /> 
                <ProtectedRoute path="/profile/:userId" component={ProfileContainer} />
                <ProtectedRoute path="/main" component={mainContainer} />
                <AuthRoute exact path="/" component={entryContainer} />  
                <AuthRoute component={entryContainer} />     
            </Switch>
        

    </div>

);


export default App;