import { connect } from 'react-redux';
import TopicShow from './topic_show'
import { fetchQuestions, deleteQuestion } from '../../actions/question_actions';
import { fetchTopic, fetchTopics } from '../../actions/topic_actions';
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
    const topicId = ownProps.match.params.id;
    const questions = Object.values(state.entities.questions).filter(
        (question) => question.topic_id == topicId)
    return ({
        topicId: topicId,
        currentUser: state.session.currentUser,
        questions: questions,
        topics: Object.values(state.entities.topics)
    })
}

const mapDispatchToProps = (dispatch) => {
    return ({
        fetchQuestions: () => dispatch(fetchQuestions()),
        deleteQuestion: (questionId) => (dispatch(deleteQuestion(questionId))),
        openModal: (modal, questionId) => (dispatch(openModal(modal, questionId))),
        fetchTopic: (id) => dispatch(fetchTopic(id)),
        fetchTopics: () => dispatch(fetchTopics())
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(TopicShow)

