import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/root";
import configureStore from './store/store';

document.addEventListener("DOMContentLoaded", () => {
    let preloadedState = undefined;
    // const store = configureStore(preloadedState);
    // //const store = createStore();
    let store;
    if (window.currentUser) {
        const preloadedState = {
            session: { currentUser: window.currentUser },
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
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
    //testing end
    
    const root = document.getElementById("root");
    ReactDOM.render(<Root store={store} />, root);
})