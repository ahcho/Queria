import React from "react";
import { Route } from 'react-router-dom';
import entryContainer from './entry_form/entry_container';

const App = () => (
    <div>
        <header>
            <ProtectedRoute path="/" component={NavBarContainer} />
            <Route path="/" component={entryContainer} /> 
        </header>
    </div>
    //<ProtectedRoute path="/profile/userId" component={UserContainer} />
);

export default App;