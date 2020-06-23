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
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.login(this.state);
    }
    
    update(field) {
        return e => this.setState({[field]: e.currentTarget.value})
    }

    render() {
        return (
            <main id="entry-page">
                <h1>Quora</h1>
                <p>A place to share knowledge and better understand the Willy Wonka's chocolate factory</p>
                <p>I'm at entry.jsx I will be a front page of this app</p>
                <br/>
                <form onSubmit={this.handleSubmit} className="login-form">
                    <div id="login-input">
                        <h2>Login</h2>
                        <input type="text" placeholder="Email" onChange={this.update("email")} value={this.state.email}/>
                        <input type="password" placeholder="password" onChange={this.update("password")}/>
                    </div>
                    <button className="login-button" type="submit">Login</button>
                </form>
            </main>
        )
    }

};

export default Entry;
