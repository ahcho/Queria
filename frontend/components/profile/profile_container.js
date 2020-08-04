import { connect } from 'react-redux';
import Profile from './profile';
import { fetchUser } from '../../actions/user_actions';
import { fetchUserQuestions } from '../../actions/question_actions';
import { fetchUserAllAnswers } from '../../actions/answer_actions';


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
        fetchUserAllAnswers:  (userId) => dispatch(fetchUserAllAnswers(userId))
    })
}

export default connect(mapStateToProps,mapDispatchToProps)(Profile);