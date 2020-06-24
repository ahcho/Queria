import React from "react";
import { Route } from 'react-router-dom';
import entryContainer from './entry_form/entry_container';
import NavBarContainer from './nav_bar/nav_bar_container';

const App = () => (
    <div>
        <header>
            
            <Route path="/" component={NavBarContainer} /> 
        </header>
    </div>
    //<ProtectedRoute path="/" component={entryContainer} />

    //<ProtectedRoute path="/profile/userId" component={UserContainer} />
);

export default App;