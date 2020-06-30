import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/root";
import configureStore from './store/store';
import {logout} from './actions/session_actions';

document.addEventListener("DOMContentLoaded", () => {
    let preloadedState = undefined;
    // const store = configureStore(preloadedState);
    // //const store = createStore();
    let store;
    if (window.currentUser) {
        const preloadedState = {
            session: { currentUser: window.currentUser.user },
            entities: {
                users: { [window.currentUser.user.id]: window.currentUser.user },
                questions: window.currentUser.questions ,
                answers: window.currentUser.answers 
            }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }

    //testing start
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.logout = logout;
    //testing end
    
    const root = document.getElementById("root");
    ReactDOM.render(<Root store={store} />, root);
})