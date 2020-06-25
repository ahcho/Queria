import React from 'react';
import { Link } from 'react-router-dom';

class LeftBar extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <ul className='left-bar'>
                <li>Feed</li>
                <li>History</li>
                <li>Products</li>
                <li>Recipe</li>
                <li>Health</li>
                <li>Tour</li>
            </ul>
        )
    }
}

export default LeftBar;