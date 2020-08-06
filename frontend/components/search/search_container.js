import { connect } from 'react-redux';
import { fetchQuestions } from '../../actions/question_actions';
import Search from './search';

const mapStateToProps = (state) => ({
        target: "",
        questions: Object.values(state.entities.questions),
});

const mapDispatchToProps = (dispatch) => {
    return ({
        fetchQuestions: () => dispatch(fetchQuestions())
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
