import { connect } from 'react-redux';
import MainPage from './main';


const mapStateToProps = (state) => {
    return ({
        currentUser: state.session.currentUser
    })

}

const mapDispatchToProps = (dispatch) => {

}

export default connect(mapStateToProps, null)(MainPage);