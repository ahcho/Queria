import { connect } from 'react-redux';
import CreateAnswer from './create_answer';
import { createAnswer, fetchAnswers } from '../../actions/answer_actions';

const mapStateToProps = (state, ownProps) => {
    
    return{
        currentUserId: ownProps.currentUserId,
        questionId: ownProps.questionId
    }
}


const mapDispatchToProps = (dispatch) => {
       
    return {
        createAnswer: (answer) => dispatch(createAnswer(answer)),
        fetchAnswers: (answerId) => dispatch(fetchAnswers(answerId))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateAnswer)