import React from 'react';
import CommentIndexItem from './comment_index_item';

class CommentIndex extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            commentsShow: false,
            body: ""
        };
        this.handleCommentsShow = this.handleCommentsShow.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

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
                        id="comment-box"
                        onChange={this.update("body")}
                        placeholder="Add a comment..."
                        value={this.state.body}>
                    </input>

                    <button className="comment-button" onClick={this.handleSubmit}>Comment</button>
                </div>);

        
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
                <div className={hasComments}>
                    <div className="comment-section">
                        <div className="comment-form">
                            <input
                                type="text"
                                id="comment-box"
                                onChange={this.update("body")}
                                placeholder="Add a comment..."
                                value={this.state.body}>
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