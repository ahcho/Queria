import React from 'react'

class CommentIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }

    hasProfilePhoto() {
        if (this.props.comment.user.profilePhotoUrl) {
            return <img src={this.props.comment.user.profilePhotoUrl} />;
        } else {
            return <i className="fas fa-user-circle"></i>;
        }
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
        return (
            
            <div className="comment-index-item">
                <div className="comment-info">
                    <div className="comment-profile-photo">
                        {this.hasProfilePhoto()}
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