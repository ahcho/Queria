import React from 'react';
import CommentIndexItem from './comment_index_item';

class CommentIndex extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            commentsShow: false,
            body: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.handleCommentsShow = this.handleCommentsShow.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.state.body.length > 0){
            this.props.createComment({ body: this.state.body, answer_id: this.props.answer.id, user_id: this.props.currentUser_id });
            this.setState({ body: "" });
        }
    } 

    update(field) {
        return (e) => {
            this.setState({ [field]: e.target.value });
        };
    };

    handleCommentsShow(e) {    
        this.setState({ commentsShow: !this.state.commentsShow });
    }

    handleKeyDown(e) {
        if (e.key === "Enter") {
            e.preventDefault();
            this.handleSubmit(e);
        }
    }

    render() {
        
        
        const { answer_id, comments, deleteComment, currentUser_id } = this.props;
        
        // get the comments by answer
        const filterComments = comments.filter(
            (comment) => comment.answer_id === answer_id
        )
        this.state.commentsShow = filterComments.length === 0 ? false : this.state.commentsShow;
    
        const hasComments = this.state.commentsShow ? "" : "comments-hide";

        
        const showCommentsBtn =
            filterComments.length > 0 ? (
                <div>
                    <button className='show-comments-btn' onClick={this.handleCommentsShow}>{filterComments.length} comments </button>
                </div>
            ) : (
                <div className="comment-form">
                    <input
                        type="text"
                        className="single-comment"
                        placeholder="Add a comment..."
                        value={this.state.body}
                        onChange={this.update("body")}
                        onKeyDown={this.handleKeyDown}>
                    </input>

                    <button className="comment-button" onClick={this.handleSubmit}>Comment</button>
                </div>);

        
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
            <div>
                {showCommentsBtn} 
                <div className={hasComments}>
                    <div className="comment-section">
                        {/* {showCommentsBtn} */}
                        <div className="comment-form">
                            <input
                                type="text"
                                className="single-comment"
                                onChange={this.update("body")}
                                placeholder="Add a comment..."
                                value={this.state.body}
                                onKeyDown={this.handleKeyDown}>
                            </input>
                            <button className="comment-button" onClick={this.handleSubmit}>Comment</button>
                        </div>
                    </div>
                    {renderComments}
                </div>
            </div>
        )
    }
}

export default CommentIndex;