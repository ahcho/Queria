import React from react; 

class UserQuestions extends React.Component {
    componentDidMount() {
        this.props.fetchUserQuestions(this.props.users.id)
    }

    render() {
        
    }
}