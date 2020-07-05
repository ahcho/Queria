import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PostForm from '../question/post_form';
import { createPost } from '../../actions/answer_actions';

const mapStateToProps = state => ({
  post: {
    body: '',
    author_id: state.session.currentUser.id,
    question_id: state.session.questionId
  },
  formType: 'Create Post'
});

const mapDispatchToProps = dispatch => ({
  createAnswer: (answer) => dispatch(createAnswer(answer))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);