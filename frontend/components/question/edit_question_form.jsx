import React from 'react';

class EditQuestionForm extends React.Component {

    constructor(props) {
        super(props);
        this.currentUser = this.props.currentUser;
        this.state = {
            question: this.props.question,
            author_id: this.props.currentUser.id,
        }
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value })
    }

    render() {
        if(!this.props.question) return null;

            return (
                <div className='question-modal'>
                    <div className='question-head'>
                        <h1 className='q-modal-msg'>Edit Question</h1>
                    </div>
                    <div className='question-reminder'>
                        Tips on getting good answers quickly
                        Make sure your question has not been asked already
                        Keep your question short and to the point
                        Double-check grammar and spelling
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
                                Add Question</button>
                        </div>
                    </form>
                </div>
            )
    }
}

const mapDispatchToProps = (dispatch) => {
    return ({
        fetchPost: questionId => dispatch(fetchPost(questionId)),
        action: question => dispatch(updateQuestion(question))
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(EditQuestionForm);