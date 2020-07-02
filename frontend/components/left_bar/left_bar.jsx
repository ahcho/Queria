import React from 'react';
import { Link } from 'react-router-dom';

class LeftBar extends React.Component {
    constructor(props) {
        super(props);
        this.redirect = this.redirect.bind(this)

    }

    redirect(topic) {

    }

    render() {
        return (
            <div className='left-bar'>
                <ul className='topic-list'>
                    <li onClick={this.redirect}><i className="fa fa-rss" aria-hidden="true"></i>Feed</li>
                    <li><img src="https://images.unsplash.com/photo-1473163928189-364b2c4e1135?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" width="25" height="25"></img>History</li>
                    <li><img src="https://images.unsplash.com/photo-1534705867302-2a41394d2a3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80" width="25" height="25"></img>Products</li>
                    <li><img src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" width="25" height="25"></img>Recipe</li>
                    <li><img src="https://images.unsplash.com/photo-1543362906-acfc16c67564?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80" width="25" height="25"></img>Health</li>
                    <li><img src="https://images.unsplash.com/photo-1534450539339-6d1c81ad18e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=719&q=80" width="25" height="25"></img>Tour</li>
                </ul>
            </div>
        )
    }
}

export default LeftBar;