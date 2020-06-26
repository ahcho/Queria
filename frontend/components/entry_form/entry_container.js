import { connect } from 'react-redux';
import { login, createNewUser, clearErrors } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import Entry from './entry';

const mapStateToProps = (state) => ({
    errors: state.errors.session
});

const mapDispatchToProps = (dispatch) => ({
    login: (user) => dispatch(login(user)),
    createNewUser: (newUser) => dispatch(createNewUser(newUser)),
    openModal: (modal) => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal()),
    clearErrors: () => dispatch(clearErrors())
}); 

export default connect(mapStateToProps, mapDispatchToProps)(Entry);