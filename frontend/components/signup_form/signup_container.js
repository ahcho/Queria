import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import SignUpForm from './signup';

const mapDispatchToProps = (dispatch) => {
    return ({
        closeModal: () => dispatch(closeModal())
    })
}

export default connect(null, mapDispatchToProps)(SignUpForm);