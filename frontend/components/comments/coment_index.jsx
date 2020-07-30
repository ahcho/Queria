import React from 'react';
import CommentIndexItem from './comment_index_item';

class CommentIndex extends React.Component {

    render() {
        
        
        const { answer_id, comments, deleteComment, currentUser_id } = this.props;

        const hasComments = comments.length > 0 ? "comments-hide" : "";
        // get the comments by answer
        const filterComments = comments.filter(
            (comment) => comment.answer_id === answer_id
        )

        const showCommentsBtn =
            filterComments.length > 0 ? (
                <div>
                    <button>{filterComments.length} comments </button>
                    {/* {filterComments.length} comments */}
                </div>
            ) : null;

        
        const renderComments = filterComments.map((comment) => {
            return (
                <div>
                    <CommentIndexItem 
                        comment={comment} 
                        key={comment.id}
                        deleteComment={deleteComment}
                        currentUser_id={currentUser_id}/>
                </div>
            )
        })
     
        return(
            <div>
                {showCommentsBtn} 
                {renderComments}
            </div>
        )
    }
}

export default CommentIndex;