import { connect } from 'react-redux';
import TopicList from './topic_list'
import { fetchTopics } from '../../actions/topic_actions';


const mapStateToProps = (state) => {
    return ({
        topics: Object.values(state.entities.topics)
    })
};

const mapDispatchToProps = (dispatch) => {
    return ({
        fetchTopics: ()  => (dispatch(fetchTopics()))
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(TopicList)