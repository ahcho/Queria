import React from 'react';
import AnswerIndexItem from './answer_index_item';

class AnswerIndex extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        const {answers, currentUser, deleteAnswer, updateAnswer, users} = this.props;        
        if (!answers) return null
        return (
            <div>
                <div className="answer-index-box">
                {
                    answers.map(
                        (answer) => {
                            return (
                                <AnswerIndexItem author={users[answer.author_id]}///
                                answer={answer} deleteAnswer={deleteAnswer}
                                key={answer.id} currentUser={currentUser}
                                />)})
                }
                </div>
                
            </div>
        )

    }
}

export default AnswerIndex;

// {
//     answers.map(
//         (answer) => <AnswerIndexItem
//             answer={answer} deleteAnswer={deleteAnswer} key={answer.id}
//             openModal={openModal} currentUserId={currentUser.id}
//             users={users} />)
// }