import React from 'react';
import { updateQuestion } from '../../actions/question_actions';

class EditQuestionForm extends React.Component {

    constructor(props) {
        super(props);
        // this.currentUser = this.props.currentUser;
        // this.state = {
        //     question: ""
        // }
    }

    // update(field) {
    //     return e => this.setState({ [field]: e.currentTarget.value })
    // }

    // handleSubmit(e) {
    //     e.preventDefault();

    //     const question = Object.assign({}, this.state);
    //     this.props.updateQuestion(question)
    //         .then(() => { this.props.closeModal() })

    // }

    render() {
        return (
            <div className='question-modal'>
                i'm modal
                {/* <div className='question-head'>
                    <h1 className='q-modal-msg'>Update Question</h1>
                </div>
                <div className='question-reminder'>
                    Update your question!
                </div>

                <form className='modal-q-form' onSubmit={this.handleSubmit}>
                    <h2 className='q-form-header'>{this.currentUser.first_name} asked</h2>
                    <input type="text"
                        placeholder='Start your question with "What","How","Why", etc'
                        onChange={this.update('question')} />
                    <div className='q-form-btn'>
                        <select name="topic-select" id="slct">
                            <option>Category</option>
                            <option value="1">history</option>
                            <option value="2">product</option>
                            <option value="3">recipe</option>
                            <option value="4">health</option>
                            <option value="5">tour</option>
                        </select>
                        <button onClick={() => this.props.closeModal()}>
                            cancel</button>
                        <button onClick={this.handleSubmit} >
                            Update Question
                        </button>
                    </div>
                </form> */}
            </div>
        )
    }
}