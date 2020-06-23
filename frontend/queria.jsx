import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/root";
import configureStore from './store/store';

document.addEventListener("DOMContentLoaded", () => {
    const store = configureStore();
    
    // //testing start
    // window.getState = store.getState;
    // window.dispatch - store.dispatch;
    
    // //testing end
    
    const root = document.getElementById("root");
    ReactDOM.render(<h1>Queria the great candyland!</h1>, root);

    // ReactDOM.render(<Root store={store} />, root);
})