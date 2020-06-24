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
    }

    handleSubmit(e) {
        e.preventDefault();
        debugger
        (this.state.fname.length > 1) ? this.props.createNewUser(this.state) : this.props.login(this.state);   
    }
    
    update(field) {
        return e => this.setState({[field]: e.currentTarget.value})
    }

    render() {
        return (
            <main id="entry-page">
                <h1>Queria</h1>
                <p>A place to share knowledge and better understand the Willy Wonka's chocolate factory</p>
                <br/>
                <form className="login-form">
                    <div id="login-input">
                        <h2>Login</h2>
                        <input type="text" placeholder="Email" onChange={this.update("email")} value={this.state.email}/>
                        <input type="password" placeholder="password" onChange={this.update("password")}/>
                    </div>
                    <button className="login-button" type="submit" onClick={this.handleSubmit} >Login</button>
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
            </main>
        )
    }

};

export default Entry;
