import SearchResults from "./search_results";
import debounce from "lodash.debounce";
import React from "react";

class TextSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            queryStr: "",
            focused: false,
            currIdx: null
        }

        this.search = debounce(this.search, 200).bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.handleFocus = this.handleFocus.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.resultsKeyHandlers = this.resultsKeyHandlers.bind(this);
    }

    resultsKeyHandlers(event) {
        const lastIndex = this.props.searchResults.length - 1;
        if (event.key === "ArrowUp") {
            if (this.state.currIdx === null) {
                this.setState({ currIdx: lastIndex });
            } else if (this.state.currIdx > 0) {
                this.setState({ currIdx: this.state.currIdx - 1 });
            }
        } else if (event.key === "ArrowDown") {
            if (this.state.currIdx === null) {
                this.setState({ currIdx: 0 });
            } else if (this.state.currIdx < lastIndex) {
                this.setState({ currIdx: this.state.currIdx + 1 });
            }
        } else if (event.key === "Enter" && this.state.currIdx !== null) { 
            const currResult = document.getElementById(`search-result-${this.state.currIdx}`);
            currResult.click();
        } else if (this.state.currIdx !== null) {
            this.setState({ currIdx: null });
        }
    }

    componentDidMount() {
        document.addEventListener("keydown", this.resultsKeyHandlers);
    }

    componentWillUnmount() {
        if (this.props.searchResults.length > 0) this.props.clearSearchResults();
        document.removeEventListener("keydown", this.resultsKeyHandlers);
    }

    handleInput(e) {
        e.preventDefault();
        this.setState({ queryStr: e.target.value }, this.search)
    }

    search() {
        this.props.fetchSearchResults(this.state.queryStr);
    }

    handleFocus() {
        this.setState({ focused: true });
    }
    
    handleBlur() {
        this.setState({ focused: false });
    }

    render() {
        //const showSearchBar = this.state.showSearchBar ? "search-input" : "hide-search-input"
        const showSearchBar = "search-input";
        return (
            <div className={`text-search-${this.props.parentName}`} onFocus={this.handleFocus} onBlur={this.handleBlur}>
                <form onSubmit={this.search} className="text-search">
                <input 
                    className={showSearchBar} 
                    id="search-bar-input"
                    type="text" 
                    placeholder="Search Questions" 
                    autoComplete="off"
                    aria-label="text search input"
                    onChange={this.handleInput}/>
                    <button aria-label="Search">"Search"</button>
                </form>
                <div className="search-results-container">
                    {this.state.focused ? (
                        <SearchResults
                            searchResults={this.props.searchResults}
                            fetchSearchResults={this.props.fetchSearchResults}
                            parentName={this.props.parentName}
                            currentQuery={this.state.queryStr}
                            currIdx={this.state.currIdx}
                        />
                    ) : null}
                </div>
            </div>
        )
        
    }

}

export default TextSearch;