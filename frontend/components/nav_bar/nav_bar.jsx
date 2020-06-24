import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <ul className='nav-bar'>
                <li id="logo">
                    <i class="fab fa-quora"></i>
                    <Link to='/'>Queria</Link> 
                </li>
                <li id="home">
                    <i class="fas fa-home"></i>
                    <Link to='/'>Home</Link>
                </li>
                <li id="answers">
                    <i class="fas fa-pencil-alt"></i>
                    Answer
                </li>

                <div className="search-bar">
                    <div className="search">
                        <input type="text" className="searchTerm" 
                        placeholder="Search Queria"/>
                        <button type="submit" className="searchButton">
                            <i className="fa fa-search"></i>
                        </button>
                    </div>
                </div>
                <div className="dropdown-profile">
                    <i class="fas fa-user-circle">  </i>
                </div>
                
                <button className="round-btn">Add Question</button>
              
                <button className="round-btn" onClick={this.props.logout}>Logout</button>
            </ul>
        )
    }
}

export default NavBar;