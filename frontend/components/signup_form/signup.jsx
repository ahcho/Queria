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

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value })
    }

    renderErrors() {
        const errors = this.props.errors.signup || []
        return (
            errors.map((error, idx) => <li key={idx}>{error}</li>)
        )
    }

    componentWillUnmount() {
        this.props.clearErrors();
    }

    handleCancel() {
        this.props.errors = [];
        this.props.closeModal();
    } 

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.createNewUser(user)
            .then(() => {this.props.closeModal()})
            //err => (this.renderErrors()))
    }

    render() {
        return (
            <div className="signup-form">
                <h1 id='signup-msg'>Join Queria!</h1>
                <br/>
                <form onSubmit={this.handleSubmit}>  
                    <div className="signup-input">
                        <div id="user-fname">
                            <label>First name
                                <br />
                                <input type="text" placeholder="First name" onChange={this.update("fname")} value={this.state.fname} />
                            </label>
                        </div>
                        <div id="user-lname">
                            <label>Last name
                                <br />
                                <input type="text" placeholder="Last name" onChange={this.update("lname")} value={this.state.lname} />
                            </label>
                        </div>

                        <div id="signup-email">Email
                            <br />
                            <input type="text" placeholder="Email" onChange={this.update("signup_email")} value={this.state.signup_email} />
                        </div>
                
                        <div id="signup-password">Password(6 or more characters)
                            <br />
                            <input type="password" placeholder="Password(6 or more characters)" onChange={this.update("signup_pw")} value={this.state.signup_pw} />
                        </div>
                        <div className="signup-btn">
                            <button type="submit" onClick={() => this.props.closeModal()}>Cancel</button>                             
                            <button type="submit" onClick={this.handleSubmit}>Sign Up</button>        
                        </div>
                    </div >
                    <div id="signup-error">
                        {this.renderErrors()}
                    </div>
                </form>
            </div>
        )

    }
}

export default SignUpForm;
// reducer action, everytime componenet mounts 
// call this.clearerror or inside of close modal                            
