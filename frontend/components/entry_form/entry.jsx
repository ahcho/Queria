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
        this.handleModalSubmit = this.handleModalSubmit.bind(this);
        this.demoSubmit = this.demoSubmit.bind(this);
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

    test(e) {
        e.preventDefault();
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
                            <h2 className="login-msg">Login</h2>
                            <div id="login-email">
                                <input type="text" placeholder="Email" onChange={this.update("email")} value={this.state.email}/>
                            </div>
                            <div id="login-pw">
                                <input type="password" placeholder="password" onChange={this.update("password")}/>
                            </div>
                            <div className="submit-button">
                                <button type="submit" onClick={this.handleSubmit} >Login</button>
                                <button type="submit" onClick={this.demoSubmit}>Demo</button>
                            </div>
                        </form>
                        <div className="link-btn">
                            <button id='google-btn'>Go to Google</button>
                            <br/>
                            <button id='fb-btn'>Go to Facebook</button>
                            <br/>
                            <button className='signup-form-open'id='queria-btn' onClick={() => this.props.openModal('signup')}>Sign Up With Email</button>
                        </div>
                        
                        <div className="vertical"></div> 


                        
                    </div>
                </div>
            </main>
        )
    }

};

export default Entry;
