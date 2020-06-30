import {connect} from "react-redux";
import { updateQuestion, deleteQuestion, fetchQuestion } from "../../actions/question_actions";
import QuestionShow from './question_show';

const mapStateToProps = (state, ownProps) => {
    return ({ 
        question: state.entities.questions[ownProps.match.params.questionId],
        answers: state.entities.answers,
        users: state.entities.users
    })
}

const mapDispatchToProps = (dispatch) => {
    return ({
        fetchQuestion: (questionId) => dispatch(fetchQuestion(questionId)),
        deleteQuestion: (questionId) => (dispatch(deleteQuestion(questionId))),
        updateQuestion: (question) => (dispatch(updateQuestion(question)))
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionShow);