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
        this.renderErrors = this.renderErrors.bind(this);
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value })
    }

    renderErrors() {
        const errors = this.props.errors || []
        return (
            errors.map(error => <li>{error}</li>)
        )
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.createNewUser(user)
            .then(this.props.closeModal()),
            err => (this.renderError())
    }

    render() {

        return (
            <div className="signup-form">
                <h1 id='signup-msg'>Sign up with Queria!</h1>
                <br/>
                <form onSubmit={this.handleSubmit}>   
                    <div id="user-name">
                        <label>FIRST NAME
                            <br/>
                            <input type="text" onChange={this.update("fname")} value={this.state.fname} />
                        </label>
                        <br/>
                        <br/>
                        <label>LAST NAME
                            <br/>
                            <input type="text" onChange={this.update("lname")} value={this.state.lname} />
                        </label>
                    </div>
                    <br />

                    <label>EMAIL
                        <br />
                        <input type="text" onChange={this.update("signup_email")} value={this.state.signup_email} />
                    </label>
                    <br/>
                    <br/>
                    <label>PASSWORD
                        <br />
                        <input type="password" onChange={this.update("signup_pw")} value={this.state.signup_pw} />
                    </label>
                    <br />
                    <div className="signup-btn">
                        <button type="submit" onClick={() => this.props.closeModal()}>Cancel</button> 
                        <button type="submit" onClick={this.handleSubmit}>Sign Up</button>        
                    </div>
                    <div id={`signin-error ${this.props.errors ? "" : "no-error"}`}>
                        {this.renderErrors()}
                    </div>
                </form>
            </div>
        )

    }
}

export default SignUpForm;