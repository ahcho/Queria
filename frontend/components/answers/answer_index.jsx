
import React from 'react';
import AnswerIndexItem from './answer_index_item';

class AnswerIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        debugger
        const {answers, currentUser, deleteAnswer, updateAnswer} = this.props;
        
        if (!answers) return null
        return (
            <div>
                <p>This is where I'm going to display all the answers hooray!</p>
                <div className="answer-index-box">
                {
                    Object.values(answers).map(
                        (answer) => {
                            if (!answer) return null;
                        
                            return (
                                <AnswerIndexItem
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