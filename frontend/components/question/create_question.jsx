import React from 'react';

class CreateQuestion extends React.Component {

    constructor(props) {
        super(props);
        this.currentUser = this.props.currentUser;
        this.state = {
            question: "",
            author_id: this.currentUser.id,
            //topic_id: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }
     
    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value})
    }

    handleSubmit(e) {
        e.preventDefault();
    
        const question = Object.assign({}, this.state);
        this.props.createQuestion(question)
            .then(() => {this.props.closeModal()})
        
    }

    handleClose() {
        this.props.closeModal()
    }

    render () {
        return (
            <div className='question-modal'>
                <div className='question-head'>
                    <h1 className='q-modal-msg'>Add Question</h1>
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
                        onChange={this.update('question')}/>
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

export default CreateQuestion;