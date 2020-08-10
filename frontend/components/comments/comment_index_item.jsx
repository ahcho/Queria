import React from 'react'

class CommentIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {comment, currentUser_id} = this.props;

        const deleteButton =
            comment.user.id === currentUser_id ? (
                    <i
                        className="fas fa-times"
                        onClick={() => this.props.deleteComment(comment.id)}
                    ></i>
            ) : null;
            // debugger
        return (
            
            <div className="comment-index-item">
                <div className="comment-info">
                    <div className="comment-profile-photo">
                        <i className="fa fa-user-circle" aria-hidden="true"></i>
                    </div>
                    <div className="comment-name-time">
                        <li>{comment.user.first_name} {comment.user.last_name}</li>
                        <li>date and time</li>
                    </div>
                    <div className="comment-delete-btn">
                        {deleteButton}
                    </div>
                </div>
                <li key={comment.id}  className="comment-body">
                    {comment.body}
                </li>
            </div>
            )
        

    }
    
}

export default CommentIndexItem