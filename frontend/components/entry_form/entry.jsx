import React from 'react';
import { Link } from 'react-router-dom';

class Entry extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            signup_email: "",
            signup_pw: "",
            fname: "",
            lname: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.demoSubmit = this.demoSubmit.bind(this);
    }
///////////////////////
    showError() {
        const errors = this.props.errors;
        return (
            <div className="errors">
                {errors.map((error) => {
                    <li>{error}</li>
                })}
            </div>
        )
    };
///////////////////////

    handleSubmit(e) {
        e.preventDefault();
         
        (this.state.fname.length > 1) ? this.props.createNewUser(this.state) : this.props.login(this.state);   
    }
    
    demoSubmit(e) {
         
        e.preventDefault();
        this.props.login({email:"charlie@chocolate.com", password: "password"})
        .then(() => this.props.history.push('/main')) // necessary if I'm moving the user to a different page
    }

    update(field) {
        return e => this.setState({[field]: e.currentTarget.value})
    }

    render() {
        return (
            <main id="entry-page">
                <div className="center-box">
                    <h1 id="main-logo">Queria</h1>
                    <br/>
                    <p id="statement">A place to share knowledge and better understand Willy Wonka's Chocolate Factory</p>
                    <div id="forms">
                        <form className="login-form">
                            <div id="login-input">
                                <h2>         Login</h2>
                                <div id='input-bar'></div>
                                <input type="text" placeholder="Email" onChange={this.update("email")} value={this.state.email}/>
                                <br/>
                                <br/>
                                <input type="password" placeholder="password" onChange={this.update("password")}/>
                            </div>
                            <button className="login-button" type="submit" onClick={this.handleSubmit} >Login</button>
                            <button className="login-button" type="submit" onClick={this.demoSubmit}>Demo</button>
                        </form>
                        <button>Sign Up With Email</button>
                        <form className="signup-form">
                            <div id="signup-input">
                                <div id="user-name">
                                    <label>FIRST NAME
                                        <input type="text" onChange={this.update("fname")} value={this.state.fname}/>
                                    </label>
                                    <label>LAST NAME
                                        <input type="text" onChange={this.update("lname")} value={this.state.lname} />
                                    </label>
                                </div>
                                <label>EMAIL
                                    <input type="text" onChange={this.update("signup_email")} value={this.state.signup_email} />
                                </label>
                                <label>PASSWORD
                                    <input type="password" onChange={this.update("signup_pw")} value={this.state.signup_pw} />
                                </label>
                                <button className="signup-button" type="submit" onClick={this.handleSubmit}>Sign Up</button>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
        )
    }

};

export default Entry;
