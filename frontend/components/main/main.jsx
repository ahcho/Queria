import React from 'react';
import { Link } from 'react-router-dom';

class MainPage extends React.Component {

    constructor(props){
        super(props);
        this.user = this.props.currentUser;
    }

    render() {
        return (
            <div className='main-page'>
                <p>this will be the main page in main.jsx</p>
                <br/>
                <br/>
                <br/>  
                <p>{" " +this.user.first_name + " " + this.user.last_name} is logged in</p>
            </div>
        )
    }
}

export default MainPage