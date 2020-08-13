import React from 'react';
import { Link } from 'react-router-dom';
import SearchContainer from '../search/search_container'

class NavBar extends React.Component {
    constructor(props) {
        super(props)
        this.handleAddQuestion = this.handleAddQuestion.bind(this);
    }

    handleAddQuestion() {
        this.props.openModal('createquestion')
    }

    render() {
        return (
            <div className='nav-bar'>
                <div className="left">
                    <div className="dropdown-profile">

                        <i className="fas fa-bars"></i> 
                        <div className="dropdown-content">
                            <ul>
                                <li>
                                    <Link to={`/profile/${this.props.currentUser.id}`} >
                                        <span>My Profile</span>
                                    </Link>
                                </li>
                                <li onClick={this.handleAddQuestion}>Add Question</li>
                                <li onClick={this.props.logout}>Logout</li>
                            </ul>
                        </div>

                    </div>

                    {/* <div id="logo">
                        <Link className="plain" to='/'>
                        
                            <i className="fab fa-quora">
                                <p id="ueria"></p>
                            </i>
                        </Link>    
                    </div> */}
                    {/* <div className="home">
                        <Link className="plain" to='/'>
                            <i className="fas fa-home"></i>Home
                        </Link>
                    </div>
                    <div className="answers">
                        <Link className="plain" to='/'>
                        <i className="fas fa-pencil-alt"></i>
                            Answer
                        </Link>
                    </div> */}
                </div>
                <div className="nav-center">
                    <Link className="plain" to='/'>
                        <p>Queria</p>
                    </Link>
                </div>
                <div className="right">
                    <div className="search-bar">
                        <div className="search">
                            <SearchContainer />
                            {/* <input type="text" className="searchTerm" 
                            placeholder="Search Queria"/> */}
                        </div>
                    </div>
                    {/* <div className="dropdown-profile">
    
                        <i className="fas fa-user-circle">  </i>
                        <div className="dropdown-content">
                            <ul>
                                <li>
                                    <Link to={`/profile/${this.props.currentUser.id}`} >
                                        <span>My Profile</span>
                                    </Link>
                                </li>
                                <li onClick={this.props.logout}>Logout</li>
            
                            
                            </ul>
                        </div>
                    
                    </div> */}
                    {/* <div className="round-btn">
                        <button onClick={this.handleAddQuestion}>Add Question</button>
                        <button onClick={this.props.logout}>Logout</button>
                    </div> */}
                </div>
            </div>
        )
    }
}

export default NavBar;

