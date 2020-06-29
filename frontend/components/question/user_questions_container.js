import {connect} from "react-redux";
import { fetchUserQuestions } from '../../actions/question_actions';
import UserQuestions from "./user_questions"

const mapStateToProps = (state, ownProps) => {
    return ({
        answers = state.entities.answers,
        questions = state.entities.questions

    })
}

const mapDispatchToProps = (dispatch) => {
    return ({
        fetchUserQuestions: (userId) => dispatch(fetchUserQuestions(userId)),
        deleteQuestion: (questionId) => (dispatch(deleteQuestion(questionId)))
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(UserQuestions)