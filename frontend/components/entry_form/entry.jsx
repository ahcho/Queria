import React from 'react';
import { Link } from 'react-router-dom';

class Entry extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state)
        this.props.login(user);

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
                <form onSubmit={this.handSumbit} className="login-form">
                    <div id="login-input">
                        <h2>Login</h2>
                        <input type="text" placeholder="Email" onChange={this.update("email")} value={ email }/>
                        <input type="password" placeholder="password" onChange={this.update("password")}/>
                    </div>
                    <button className="login-button" type="submit">Login</button>
                </form>

            </main>
        )
    }

};

export default Entry;
