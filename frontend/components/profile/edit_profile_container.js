import { connect } from 'react-redux';
import { fetchUser, editUser } from '../../actions/user_actions';
import EditProfile from './edit_profile';

const mapStateToProps = (state) => {

    return ({
        user: state.entities.users[state.session.currentUser.id],
        url: state.session.currentUser.profilePhotoUrl// subscribinng from global state
        // if question gets updated, this componenet doesn't care
    })
}

const mapDispatchToProps = (dispatch) => {
    return ({
        editUser: (formData, userId) => dispatch(editUser(formData, userId)),
        fetchUser: (userId) => dispatch(fetchUser(userId))
    })
}
// this is how I'm subscribe to store
// I want to get user, url
// connect function 
export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);