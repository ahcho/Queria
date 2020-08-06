import { connect } from 'react-redux';
import TopicShow from './topic_show'
import { fetchQuestions, deleteQuestion } from '../../actions/question_actions';
import { fetchTopic } from '../../actions/topic_actions';
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = (state) => {
    return ({
        currentUser: state.session.currentUser,
        questions: Object.values(state.entities.questions),
        topics: Object.values(state.entities.topics)
    })
}

const mapDispatchToProps = (dispatch) => {
    return ({
        fetchQuestions: () => dispatch(fetchQuestions()),
        deleteQuestion: (questionId) => (dispatch(deleteQuestion(questionId))),
        openModal: (modal, questionId) => (dispatch(openModal(modal, questionId))),
        fetchTopic: (id) => dispatch(fetchTopic(id))
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(TopicShow)

