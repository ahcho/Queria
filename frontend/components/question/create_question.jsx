import React from 'react';

class CreateQuestion extends React.Component {

    constructor(props) {
        super(props);
        this.currentUser = this.props.currentUser;
        this.state = {
            question = "",
            author_id = this.currentUser.id,
            //topic_id = ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }
     
    update(field) {
        return e => this.setState({ [field]: e.currntTarget.value})
    }

    componentWillUnmount() {
        this.props.clearErrors();
    }

    handleSubmit(e) {
        e.preventDefault();
        const question = Object.assign({}, this.state);
        this.props.CreateQuestion(question)
            .then(() => {this.props.closeModal()})
    }
    
    handleClose() {
        this.props.closeModal()
    }

    render () {
        return (
            <div>
                in create question
            </div>
        )
    }
}

export default CreateQuestion;