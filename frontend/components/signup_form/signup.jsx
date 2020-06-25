import React from 'react';
import { Link } from 'react-router-dom';


class SignUpForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            signup_email: "",
            signup_pw: "",
            fname: "",
            lname: ""
        } 
        this.handleSubmit = this.handleSubmit.bind(this);

        
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user).then(this.props.closeModal());
    }

    render() {
        <div className="signup-form">
            <form onSubmit={this.handleSubmit}>   
                <div id="user-name">
                    <label>FIRST NAME
                                    <input type="text" onChange={this.update("fname")} value={this.state.fname} />
                    </label>
                    <label>LAST NAME
                                    <input type="text" onChange={this.update("lname")} value={this.state.lname} />
                    </label>
                </div>
                <label>EMAIL
                    <br />
                    <input type="text" onChange={this.update("signup_email")} value={this.state.signup_email} />
                </label>
                <br />
                <label>PASSWORD
                    <br />
                    <input type="password" onChange={this.update("signup_pw")} value={this.state.signup_pw} />
                </label>
                <br />
                <p> cancel </p>
                <button className="submit-button" type="submit" onClick={this.handleSubmit}>Sign Up</button>        
            </form>
        </div>

    }
}

