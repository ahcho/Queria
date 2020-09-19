# Queria
Queria is a user-generated-content question and answer web application modeled with features modeled after the Quora service. It's an application where you can ask and answer 
any questions about Charlie and Chocolate Factory.

## <a href="https://queria-app.herokuapp.com/">Queria Live</a>

## Technologies
* Ruby on Rails
* PostgresSQL
* React
* Redux
* JavaScript
* jBuilder
* AWS S3
* HTML
* CSS

## Features

### Storing Photos

Users can upload photos on question, answers and their profile photo. I used AWS photos to store these photos and only the original writer of the questions, answers can delete or edit the phoots. 


### Profile Page

Each user gets own profile page where they can see
all of their questions, answers and also edit and delete them. They can also update their profile photos in this page. As soon as the user profile photo gets updated, component checks the update and render new image.

The user uploads a profile photo. 
```js
    handleSubmit() {
        const formData = new FormData();
        if (this.state.photoFile) {
            formData.append('user[photo]', 
            this.state.photoFile)
        }
        this.props.editUser(formData, this.state.id);
    }
```

Once it is updated, set new state to render a new photo. 
```js
    componentDidUpdate(prevProps) {
        if (prevProps.user.profilePhotoUrl !== 
            this.props.user.profilePhotoUrl) {
            this.setState({ user: this.props.user })
        }
    }
```


### Code Reusabiltiy 

In order to avoid repeated codes, three different containers, creating, updating and deleting question, are all using same component to render a modal. In Post From, it checks the type of form to determine which functionalities, messages and buttons to render.

```js
Post Form
const submitBtn =
      this.props.formType === "Create Question" ? (
        <>
            <button onClick={this.handleCreateSubmit}>
                Add Question</button>
            <select name="topic-select" 
                    id="slct" 
                    onChange={this.update("topic_id")}>
                {topicDropDown}
            </select> 
        </>
      ) : (
        <button 
            onClick={this.handleSubmit}>
          {formType}</button>
      );
```
