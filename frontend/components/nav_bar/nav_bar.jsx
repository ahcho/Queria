import React from 'react';
import { Link } from 'react-router-dom';
import SearchContainer from '../search/search_container'

class NavBar extends React.Component {
    constructor(props) {
        super(props)
        this.handleAddQuestion = this.handleAddQuestion.bind(this);
        this.handleLogOut = this.handleLogOut.bind(this);
    }

    handleAddQuestion() {
        this.props.openModal('createquestion')
    }

    handleLogOut() {
        this.props.logout();
    }

    render() {
        return (
            <div className='nav-bar'>
                <div className="left">
                    <div className="nav-dropdown">
                        <i className="fas fa-bars"></i> 
                        <div className="dropdown-content">
                            <ul>
                                <li>
                                    <Link to={`/profile/${this.props.currentUser.id}`} >
                                        <p id='nav-dropdown-profile'>My Profile</p>
                                    </Link>
                                </li>
                                <li onClick={this.handleAddQuestion}>Add Question</li>
                                <li onClick={this.handleLogOut}>Logout</li>
                                {/* <li onClick={this.props.logout}>Logout</li> */}
                            </ul>
                        </div>
                    </div>
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
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default NavBar;

