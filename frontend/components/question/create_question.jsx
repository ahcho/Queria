import React from 'react';

class CreateQuestion extends React.Component {

    constructor(props) {
        super(props);
        this.currentUser = this.props.currentUser;
        this.state = {
            question: "",
            author_id: this.currentUser.id,
            topic_id: "",
            question_id: ""
        }
        this.questionId = this.props.questionId;     
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }
     
    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value})
    }

    handleKeyDown(e) {
        if (e.key === "Enter") {
            e.preventDefault();
            this.handleSubmit(e);
        }
    }

    handleSubmit(e) {    
        e.preventDefault();
        
        const question = Object.assign({}, this.state);
        this.props.createQuestion(question)
            .then(() => {this.props.closeModal()})    
    }

    handleEdit(e) {
        e.preventDefault();
        const question = Object.assign({}, this.state, { author_id: this.props.question.author_id, topic_id: 10, question_id: this.props.question.id});
        this.props.updateQuestion(question)
            .then(() => { this.props.closeModal() })
    }

    handleClose() {
        this.props.closeModal()
    }

    render () {
        if (this.props.question) {
            const questionHolder = this.props.question.question
            return (
                <div className='question-modal'>
                    <div className='question-head'>
                        <h1 className='q-modal-msg'>Edit Question</h1>
                    </div>

                    <form className='modal-q-form' onSubmit={this.handleSubmit}>
                        <div className='modal-user'>
                            <i className="fa fa-user-circle" aria-hidden="true"></i>
                            <h2 className='q-form-header'>{this.currentUser.first_name} asked</h2>
                        </div>
                        <input type="text"
                            placeholder={`${questionHolder}`}
                            onChange={this.update('question')} />
                        <div className='q-form-btn'>
                            <button onClick={() => this.props.closeModal()}>
                                CANCEL
                            </button>
                            <button onClick={this.handleEdit} >
                                Edit Question
                            </button>
                        </div>
                    </form>
                </div>
            )
        }
        else {
            return (
            <div className='question-modal'>
                <div className='question-head'>
                    <h1 className='q-modal-msg'>Add Question</h1>
                </div>
                <div className='question-reminder'>
                    <h1>Tips on getting good answers quickly</h1>
                    <p>Makesure your question has not been asked already</p>
                    <p>Keep your question short and to the point</p>
                    <p>Double-check grammar and spelling</p>
                </div>
    
                <form className='modal-q-form' onSubmit={this.handleSubmit}>
                    <div className='modal-user'>
                        <i className="fa fa-user-circle" aria-hidden="true"></i>
                        <h2 className='q-form-header'>{this.currentUser.first_name} asked</h2>
                    </div>
                    
                    <input type="text" 
                        placeholder='Start your question with "What","How","Why", etc' 
                        onChange={this.update('question')}/>
                    <div className='q-form-btn'>
                        <button 
                            onClick={this.handleSubmit} 
                            onKeyDown={this.handleKeyDown}>
                            Add uestion
                        </button>
                        <button onClick={() => this.props.closeModal()}>
                            cancel</button>
                        <select name="topic-select" id="slct">
                            <option>vategory</option>
                            <option value="1">history</option>
                            <option value="2">product</option>
                            <option value="3">recipe</option>
                            <option value="4">health</option>
                            <option value="5">tour</option>
                        </select>
                    </div>
                </form>
            </div>
        )}
    }
}

export default CreateQuestion;