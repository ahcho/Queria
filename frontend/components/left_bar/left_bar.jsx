import React from 'react';
import { Link } from 'react-router-dom';

class LeftBar extends React.Component {
    constructor(props) {
        super(props);
        this.redirect = this.redirect.bind(this)

    }

    redirect(topic) {

    }

    render() {
        return (
            <div className='left-bar'>
                <ul className='topic'>
                    <li onClick={this.redirect}>Feed</li>
                    <li>History</li>
                    <li>Products</li>
                    <li>Recipe</li>
                    <li>Health</li>
                    <li>Tour</li>
                </ul>
            </div>
        )
    }
}

export default LeftBar;