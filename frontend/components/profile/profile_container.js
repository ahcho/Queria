import { connect } from 'react-redux';
import Profile from './profile';
import { fetchUser } from '../../actions/user_actions';
import { fetchUserAllAnswers } from '../../actions/answer_actions';
import { deleteQuestion } from '../../actions/question_actions';
import { openModal } from '../../actions/modal_actions';
import { deleteAnswer, updateAnswer } from '../../actions/answer_actions';
import { createComment } from '../../actions/comment_actions';
import { fetchTopics } from '../../actions/topic_actions';


const mapStateToProps = (state) => {
    return ({
        user: state.session.currentUser,
        answers: Object.values(state.entities.answers),
        questions: Object.values(state.entities.questions)
    })

}

const mapDispatchToProps = (dispatch) => {
    return ({
        fetchUser: (userId) => dispatch(fetchUser(userId)),
        fetchUserAllAnswers:  (userId) => dispatch(fetchUserAllAnswers(userId)),
        deleteQuestion: (questionId) => (dispatch(deleteQuestion(questionId))),
        openModal: (modal, questionId) => (dispatch(openModal(modal, questionId))),
        deleteAnswer: (answerId) => (dispatch(deleteAnswer(answerId))),
        updateAnswer: (answer) => (dispatch(updateAnswer(answer))),
        createComment: (comment) => (dispatch(createComment(comment))),
        // fetchTopics: () => dispatch(fetchTopics())
    })
}

export default connect(mapStateToProps,mapDispatchToProps)(Profile);