import { connect } from 'react-redux';
import CreateAnswer from './create_answer';
import { createAnswer } from '../../actions/answer_actions';

const mapStateToProps = (state, ownProps) => {
    debugger
    return{
        currentUserId: ownProps.currentUserId,
        questionId: ownProps.questionId
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        createAnswer : (answer) => dispatch(createAnswer(answer))
    };
};

export default connect(null, mapDispatchToProps)(CreateAnswer)