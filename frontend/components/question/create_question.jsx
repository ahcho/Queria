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

    // componentWillUnmount() {
    //     this.props.clearErrors();
    // }

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
                    <h1>Add Question</h1>
                    <h2><p>{this.currentUser.first_name} asked</p></h2>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" 
                        placeholder='Start your question with "What","How","Why", etc' 
                        onChange={this.update('question')}/>
                    <button onClick={() => this.props.closeModal()}>
                        cancel</button>
                    <button onClick={this.handleSubmit}>
                        Add Question</button>
                </form>
            </div>
        )
    }
}

export default CreateQuestion;