import {connect} from "react-redux";
import DisplayQuestion from './display_question';
import { updateQuestion, deleteQuestion } from "../../actions/question_actions";


const mapStateToProps = (state, ownProps) => {

    //currentUser: state.currentUser
}

const mapDispatchToProps = (dispatch) => {
    return ({
        deleteQuestion: (questionId) => (dispatch(deleteQuestion(questionId))),
        updateQuestion: (question) => (dispatch(updateQuestion(question)))
    })
}

export default connect(null, mapDispatchToProps)(DisplayQuestion);