import React from 'react'

class CommentIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {comment, currentUser_id} = this.props;

        const deleteButton =
            comment.user.id === currentUser_id ? (
                <div className="snb-top-right">
                    <i
                        className="fas fa-times"
                        onClick={() => this.props.deleteComment(comment.id)}
                    ></i>
                </div>
            ) : null;

        return (
            
            <div className="comment-index-item">
                {deleteButton}
                <li>
                    {comment.body}
                </li>
                <li>
                    {comment.user.first_name} {comment.user.last_name}
                </li>
            </div>
            )
        

    }
    
}

export default CommentIndexItem