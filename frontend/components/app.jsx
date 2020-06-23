import React from "react";
import entryContainer from './entry_form/entry';
import { Route } from 'react-router-dom';


const App = () => (
    <div>
        <header>
            <h1>Queria the candyland in app.jsx</h1>
            <ROUTE path="/" component={entryContainer} /> 
        </header>
    </div>

);

export default App;