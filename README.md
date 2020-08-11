# Queria
Queria is a Quora clone. It's an application where you can ask and answer 
any questions about Charlie and Chocolate Factory.

## <a href="https://queria-app.herokuapp.com/">Queria Live</a>

## Technologies
* Ruby on Rails
* PostgresSQL
* React
* Redux
* JavaScript
* jBuilder

## Features

In order to show edit text box, when edit button is clicked in a same page. I changed the state as button click to simplify the program. 
```

handleDropDown(e) {
    this.setState({ dropDown: !this.state.dropDown });
}
render() {
    ...
    const deleteButton =
        this.props.currentUser.id === this.props.author.id ? (
            <div className="snb-top-right">
            <i className="far fa-edit" onClick={this.handleDropDown}></i>
            <i
                className="fas fa-times"
                onClick={() => this.props.deleteAnswer(answer.id)}
            ></i>
            </div>
        ) : null;
        
    ...
}

```

In order to implement the question searching feature, I filter questions as the user input changes.  

```
    handleInput(e) {
        if (e.target.value === "") {
            this.setState({ target: "", questions: [] });
        } else {
            this.props.fetchQuestions()
            const targetQuestions = this.props.questions.filter(
                (question) => question.question.toLowerCase().includes(e.target.value.toLowerCase())
            )
            this.setState({ target: e.target.value, questions: targetQuestions })
        }
    }
```
<img src="https://i.ibb.co/BsyprKn/signup.png" alt="sign-up-error" style="width:20%;height:20%">

Sign up only takes a unique email address.

<img src="https://i.ibb.co/8g9zQVd/edit.png" alt="question" style="width:30%;height:30%">

Users can ask questions and write answers.

<img src="https://i.ibb.co/B27kttX/delete.png" alt="delete" style="width:30%;height:30%">


Users can delete questions and answers that are written by them.  

<img src="https://i.ibb.co/tmbMk9L/profile.png" alt="question" style="width:30%;height:30%">

Users have own profile page and it shows number of answers and questions they wrote.

## Futer Features
* Photo Upload: users can upload photos on answers, and change their profile photo.