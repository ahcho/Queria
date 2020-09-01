import React from 'react';
import { Link } from 'react-router-dom';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            target: "", 
            questions: [],
            showSearchBar: false }
        this.handleInput = this.handleInput.bind(this)
        this.clearSearch = this.clearSearch.bind(this)
        this.handleSearchBar = this.handleSearchBar.bind(this);

    }

    getMatches(questions) {
        return Object.values(questions).map((question) => {
            return (
                <li className="target-question" key={question.id}>
                    <Link onClick={this.clearSearch} to={`/question/${question.id}`}>{question.question}</Link>
                </li>
            )
        })
    }

    handleSearchBar() {
        this.setState({ showSearchBar: !this.state.showSearchBar });
    }

    clearSearch() {
        this.setState({ target: "", questions: [] })
        document.getElementById('search-bar-input').value = ""
    }

    handleInput(e) {
        if (e.target.value === "") {
            this.clearSearch();
        } else {
            this.props.fetchQuestions()
            const targetQuestions = this.props.questions.filter(
                (question) => question.question.toLowerCase().includes(e.target.value.toLowerCase())
            )
            this.setState({ target: e.target.value, questions: targetQuestions })
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params !== prevProps.match.params){
            this.clearSearch();
        }
    }

    render() {
        const showSearchBar = this.state.showSearchBar ? "search-input" : "hide-search-input"
        const questions = this.state.questions;
        const foundQuestions = this.getMatches(questions)
        const foundTarget = (questions.length > 0) ? 'foundTarget' : '';
        return (
            <div className="search-bar">
                <input 
                    className={showSearchBar} 
                    id="search-bar-input"
                    type="text" 
                    placeholder="Search Queria" 
                    
                    onKeyUp={this.handleInput}/>
                <ul className={foundTarget}>
                    {foundQuestions}
                </ul>
                <i className="fas fa-search" onClick={this.handleSearchBar}></i>
            </div>
        )
    }
}

export default Search;
