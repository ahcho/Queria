import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import { createNewUser, clearErrors } from '../../actions/session_actions';
import SignUpForm from './signup';

const mapStateToProps = (state) => ({
    errors: state.errors.session
});

const mapDispatchToProps = (dispatch) => {
    return ({
        closeModal: () => dispatch(closeModal()),
        createNewUser: (newUser) => dispatch(createNewUser(newUser)),
        clearErrors: () => dispatch(clearErrors())
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);