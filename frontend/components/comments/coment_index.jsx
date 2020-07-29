import React from 'react';
import CommentIndexItem from './comment_index_item';

class CommentIndex extends React.Component {

    render() {
        
        const { answer_id, comments, deleteComment, currentUser_id } = this.props;
        // get the comments by answer
        const filterComments = comments.filter(
            (comment) => comment.answer_id === answer_id
        )

        const renderComments = filterComments.map((comment) => {
            return (
                <CommentIndexItem 
                    comment={comment} 
                    key={comment.id}
                    deleteComment={deleteComment}
                    currentUser_id={currentUser_id}/>
            )
        })
     
        return(
            <div className="comments-box">
                {renderComments}
            </div>
        )
    }
}

export default CommentIndex;