import { connect } from 'react-redux';
import { createNewUser } from '../../actions/session_actions';
import Entry from './entry';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapDispatchToProps = dispatch => {
    return {
        processForm: (user) => dispatch(createNewUser(user)),
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(null, mapDispatchToProps)(Entry);