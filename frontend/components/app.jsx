import React from "react";
import { Route } from 'react-router-dom';
import entryContainer from './entry_form/entry_container';

const App = () => (
    <div>
        <header>
            <h1>Queria app.jsx</h1>
            <Route path="/" component={entryContainer} /> 
        </header>
    </div>

);

export default App;