import React from 'react';
import AnswerIndexItem from './answer_index_item';

class AnswerIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        const {answers, currentUser, deleteAnswer, updateAnswer} = this.props;
        
        if (!answers) return null

        //debugger
        return (
            <div>
                <div className="answer-index-box">
                {
                    Object.values(answers).map(
                        (answer) => {
                            if (!answer) return null;
                            const author = this.props.users[answer.id];/////
                            return (
                                <AnswerIndexItem author={author}///
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