import { connect } from 'react-redux';
import { fetchQuestions } from '../../actions/question_actions';
import Search from './search';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state) => {
    return ({
        target: "",
        questions: Object.values(state.entities.questions),
    })
}

const mapDispatchToProps = (dispatch) => {
    return ({
        fetchQuestions: () => dispatch(fetchQuestions())
    })
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Search));
