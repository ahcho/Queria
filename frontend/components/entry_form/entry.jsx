import React from 'react';
import { Link } from 'react-router-dom';

class Entry extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleModalSubmit = this.handleModalSubmit.bind(this);
        this.demoSubmit = this.demoSubmit.bind(this);
        this.renderError = this.renderError.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.login(this.state);   
    }
    
    demoSubmit(e) {
        e.preventDefault();
        this.props.login({email:"charlie@chocolate.com", password: "password"})
        .then(() => this.props.history.push('/main')) // necessary if I'm moving the user to a different page
    }

    handleModalSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.createNewUser(user).then(this.props.closeModal());
    }

    update(field) {
        return e => this.setState({[field]: e.currentTarget.value})
    }

    renderError() {
        const error = this.props.errors || []
        return (
                <li>{error[0]}</li>
        )
    }

    render() {
        return (
            <main id="entry-page">
                <div className="center-box">
                    <div className="entry-page-top">
                        <div>
                            <h1 id="main-logo">Queria</h1>
                            <h2 className="entry-tag-line">A place to share knowledge and better understand Willy Wonka's Chocolate Factory</h2>
                        </div>
                    </div>
                    <div className="entry-page-bottom">
                        <div className=" login-signup-form">
                            <form className="login">
                                <h2 className="login-msg">Login</h2>
                                <div className="user-input">
                                    <div id="login-email">
                                        <input type="text" placeholder="Email" onChange={this.update("email")} value={this.state.email}/>
                                    </div>
                                    <div id="login-pw">
                                        <input type="password" placeholder="password" onChange={this.update("password")}/>
                                    </div>
                                </div>
                                <div className="login-bottom">
                                    <div id={`login-error ${this.props.errors ? "" : "no-error"}`}>
                                        {this.renderError()}
                                    </div>
                                    <div className="submit-button">
                                        <button type="submit" onClick={this.handleSubmit}>Login</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="signup-2">
                            <div className="signup">
                                <button id='google-btn'>Anna's GitHub</button>
                                <button id='fb-btn' type="submit" onClick={this.demoSubmit}>Demo</button>
                                <button className='signup-form-open'id='queria-btn' onClick={() => this.props.openModal('signup')}>Sign Up With Email</button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        )
    }

};

export default Entry;
