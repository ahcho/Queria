import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <div className='nav-bar'>
                <li onClick={this.props.logout}>Logout</li>
            </div>
        )
    }
}

export default NavBar;