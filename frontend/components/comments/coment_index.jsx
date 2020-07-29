import React from 'react';
import CommentIndexItem from './comment_index_item';

class CommentIndex extends React.Component {

    render() {
        
        // get the comments by answer
        const filterComments = this.props.comments.filter(
            (comment) => comment.answer_id === this.props.answer_id
        )

        const commentIndexItems = filterComments.map((comment) => {
            return (
                <CommentIndexItem comment={comment} key={comment.id}/>
            )
        })
     
        return(
            <div className="comments-box">
                {commentIndexItems}
            </div>
        )
    }
}

export default CommentIndex;