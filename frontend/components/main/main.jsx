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
                <div className='main-right'>
                    <p>I'm going to be on the rightside of main page</p>
                </div>
                <div className='main-center'>
                    <br/>
                    <br/>
                    <br/>
                    <p>{" " +this.user.first_name + " " + this.user.last_name} is logged in</p>
                </div>
                <div className='main-left'>
                    <br />
                    <br />
                    <br />
                    <p>I'm going to be on the leftside of main page</p>
                </div>   
            </div>
        )
    }
}

export default MainPage