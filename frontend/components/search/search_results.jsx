import React from "react";
import { Link } from "react-router-dom";

class SearchResults extends React.Component {
    constructor(props) {
        super(props);
        this.onMouseDown = this.onMouseDown.bind(this);
    }

    onMouseDown(e) {
        e.preventDefault();
    }

    componentDidMount() {
        const { searchResults, currentQuery } = this.props;
        if (!searchResults.length && currentQuery.length === 0) this.props.fetchSearchResults("");
    }

    render() {
        const currIdx = this.props.currIdx;

        const results = this.props.searchResults.map((searchResult, idx) => 
            <li className="target-question" key={question.id}>
                <Link onClick={this.clearSearch} to={`/question/${question.id}`}>{question.question}</Link>
            </li>
        )

        const noResultsDisplay = (
            <li className="search-result">No Results Found</li>
        )

        return (
            <ul className={`search-results-${this.props.parentName}`}>
                    {this.props.searchResults.length ? results : noResultsDisplay}
            </ul>
        )
    }
}

export default SearchResults;