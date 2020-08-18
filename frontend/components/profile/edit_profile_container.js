import { connect } from 'react-redux';
import { fetchUser, editUser } from '../../actions/user_actions';
import EditProfile from './edit_profile';

const mapStateToProps = (state) => {
    //  
    return ({
        user: state.session.currentUser
    })
}

const mapDispatchToProps = (dispatch) => {
    return ({
        editUser: (formData, userId) => dispatch(editUser(formData, userId)),
        fetchUser: (userId) => dispatch(fetchUser(userId))
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);