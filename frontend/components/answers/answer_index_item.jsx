import React from 'react';
import { Link } from 'react-router-dom';

class AnswerIndexItem extends React.Component {

    constructor(props) {
        super(props);
    }



    render() {
        const {answer, author} = this.props;
        if (!answer|| !author) return null
        

        const deleteButton = (
            (this.props.currentUser.id === this.props.author.id) ? (
                <div className='right'>
                    <i className="fas fa-times" onClick={() => this.props.deleteAnswer(answer.id)}></i>
                </div>
            ) : (null)
        )
 
        return (
            <div className='single-answer-box'>
                {deleteButton}
                <div className='snb-top'>
                    <i className="fa fa-user-circle" aria-hidden="true"></i>  
                    <p className="a-author-name">{author.first_name} {author.last_name}</p>                              
                    <p className="a-date">{answer.updated_at.slice(0, 10)} at {answer.updated_at.slice(11, 16)}</p>
                </div>
                <div className='snb-body'>
                    <p>{answer.body}</p>
                </div>
            </div>
        )
    }

        
}

export default AnswerIndexItem;
