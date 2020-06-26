import React from "react";
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import entryContainer from './entry_form/entry_container';
import mainContainer from './main/main_container'
import leftBarContainer from './left_bar/left_bar'
import navBarContainer from './nav_bar/nav_bar_container';
import Modal from './modal/modal';
import { logger } from 'redux-logger';


const App = () => (
    <div>
        <Modal />
        <header>  
            <ProtectedRoute path="/" component={navBarContainer} />
            <ProtectedRoute path="/" component={leftBarContainer} />
            <Switch>
                <ProtectedRoute path="/main" component={mainContainer} />
                <AuthRoute exact path="/" component={entryContainer} />  
                <AuthRoute component={entryContainer} />   
            </Switch>
        </header>
    </div>

    //<ProtectedRoute path="/profile/userId" component={UserContainer} />
);

/////????????????

export default App;