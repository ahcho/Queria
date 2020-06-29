import React from 'react';

class EditQuestionForm extends React.Component {

    constructor(props) {
        super(props);
        this.currentUser = this.props.currentUser;
        this.state = {
            question: ""
        }
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value })
    }
    render() {
        return (
            <div className='edit-q-modal'>
                <div classNmae='edit-head'>
                    <h1 className='e-modal-msg'>Edit Question</h1>
                </div>
                <form className='modal-e-form'>
                    edit your question :)
                    <div className='previous-q'></div>
                </form>
            </div>
        )
        
    }
}