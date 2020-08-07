import React from 'react';
import { Link } from 'react-router-dom';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = { target: "", questions: [] }
        this.handleInput = this.handleInput.bind(this)
        this.resetSearch = this.resetSearch.bind(this)
    }

    resetSearch(e) {
        this.setState({ target: e.target.value, questions: [] })
    }

    getMatches(questions) {
        return Object.values(questions).map((question) => {
            return (
                <li className="target-question" key={question.id}>
                    <Link onClick={this.resetSearch} to={`/question/${question.id}`}>{question.question}</Link>
                </li>
            )
        })
    }

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

    render() {
        const questions = this.state.questions;
        const foundQuestions = this.getMatches(questions)
        const foundTarget = (questions.length > 0) ? 'foundTarget' : '';
        return (
            <div className="search-bar">
                <input className="search-input" type="text" placeholder="Search Queria" onKeyUp={this.handleInput} />
                <ul className={foundTarget}>
                    {foundQuestions}
                </ul>
            </div>
        )
    }
}

export default Search;
