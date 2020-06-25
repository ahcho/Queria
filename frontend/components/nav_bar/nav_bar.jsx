import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <ul className='nav-bar'>
                <div className="left">
                    <li id="logo">
                        <i className="fab fa-quora"></i>
                        <Link className="plain" to='/'>ueria</Link>
                    </li>
                    <li id="home">
                        <i className="fas fa-home"></i>
                        <Link className="plain" to='/'>Home</Link>
                    </li>
                    <li id="answers">
                        <i className="fas fa-pencil-alt"></i>
                        Answer
                    </li>
                </div>
                <div className="right">

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
                        <i className="fas fa-user-circle">  </i>
                    
                    </div>
                    
                    <button className="round-btn">Add Question</button>
                
                    <button className="round-btn" onClick={this.props.logout}>Logout</button>
                </div>
            </ul>
        )
    }
}

export default NavBar;