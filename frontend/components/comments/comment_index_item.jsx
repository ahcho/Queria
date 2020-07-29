import React from 'react'

class CommentIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <li className="comment-index-item">
                {this.props.comment.body}
            </li>)
        

    }
    
}

export default CommentIndexItem