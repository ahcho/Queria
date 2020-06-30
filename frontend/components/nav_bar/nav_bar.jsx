import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
    constructor(props) {
        super(props)
        this.handleAddQuestion = this.handleAddQuestion.bind(this);
    }

    handleAddQuestion() {
        //debugger
        this.props.openModal('createquestion')
    }

    render() {
        return (
            <ul className='nav-bar'>
                <div className="left">
                    <li id="logo">
                        <Link className="plain" to='/'>
                            <i className="fab fa-quora"></i>ueria
                        </Link>    
                    </li>
                    <li id="home">
                        <Link className="plain" to='/'>
                            <i className="fas fa-home"></i>Home
                        </Link>
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
                        </div>
                    </div>
                    <div className="dropdown-profile">
    
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
                    
                    </div>
                    <div className="round-btn">
                        <button onClick={this.handleAddQuestion}>Add Question</button>
                        <button onClick={this.props.logout}>Logout</button>
                    </div>
                </div>
            </ul>
        )
    }
}

export default NavBar;

/* <div className="dropdown-profile">
    <a href="">
        <i className="fas fa-user-circle">  </i>
    </a>

</div> */