import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import { login, createNewUser } from '../../actions/session_actions';
import SignUpForm from './signup';

const mapDispatchToProps = (dispatch) => {
    return ({
        closeModal: () => dispatch(closeModal()),
        createNewUser: (newUser) => dispatch(createNewUser(newUser))
    })
}

export default connect(null, mapDispatchToProps)(SignUpForm);