import React from 'react';
import { Link } from 'react-router-dom';

class MainPage extends React.Component {
    render() {
        return (
            <div>
                <p>this will be the main page in main.jsx</p>
                <br/>
                <br/>
                <br/>  
                <p>hello!!!! {this.props.currentUser.email}!!!!</p>
            </div>
        )
    }
}

export default MainPage