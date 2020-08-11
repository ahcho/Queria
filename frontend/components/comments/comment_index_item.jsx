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
                    className="comment-delete-btn fas fa-times"
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
                        <p>{comment.user.first_name} {comment.user.last_name}</p>
                        <p>{comment.updated_at.slice(0, 10)} at{" "}
                            {comment.updated_at.slice(11, 16)}</p>
                    </div>
                    {deleteButton}
                </div>
                <p key={comment.id}  className="comment-body">
                    {comment.body}
                </p>
            </div>
            )
        

    }
    
}

export default CommentIndexItem