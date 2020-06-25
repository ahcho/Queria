import React from "react";
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import entryContainer from './entry_form/entry_container';
import mainContainer from './main/main_container'
import NavBarContainer from './nav_bar/nav_bar_container';

const App = () => (
    <div>
        <header>
            
            <ProtectedRoute path="/" component={NavBarContainer} />
            <ProtectedRoute path="/main" component={mainContainer} />
            <Route exact path="/" component={entryContainer} /> 
        </header>
    </div>

    //<ProtectedRoute path="/profile/userId" component={UserContainer} />
);

export default App;