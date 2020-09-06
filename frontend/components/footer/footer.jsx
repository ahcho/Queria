import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';
import { Link } from 'react-router-dom';


class Footer extends React.Component {
    constructor(props) {
        super(props)
        this.handleAddQuestion = this.handleAddQuestion.bind(this);
    }

    handleAddQuestion() {
        this.props.openModal('createquestion')
    }

    render() {
        return (
            <div className='footer'>
                <i className="fa fa-question-circle" aria-hidden="true" onClick={this.handleAddQuestion}>
                    <span className="tooltip">Ask a Question!</span>
                </i>
                <Link to={`/profile/${this.props.currentUser.id}`} >
                    <i className="far fa-user">
                        <span className="tooltip">My Profile</span>
                    </i>
                    {/* <i className="fa fa-user" aria-hidden="true"></i> */}
                </Link>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout()),
    openModal: (modal) => dispatch(openModal(modal))
})

export default connect(mapStateToProps, mapDispatchToProps)(Footer);