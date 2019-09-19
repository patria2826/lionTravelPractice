import React from 'react'

class SearchBar extends React.Component {
    state = {
        term: '',
        originalTerm: ''
    }
    onInputChange = (event) => {
        this.setState({ term: event.target.value });
    }
    onFormSubmit = (event) => {
        event.preventDefault();

        //Don't search if the keywords are the same
        this.setState({ originalTerm: this.state.term });

        //we call callback from parent component
        //Don't search if the keywords are the same
        if (this.state.originalTerm !== this.state.term) { this.props.onFormSubmit(this.state.term) };
    }
    render() {
        return (
            <div className="search-bar ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>Video Search</label>
                        <input
                            type="text"
                            value={this.state.term}
                            onChange={this.onInputChange}>
                        </input>
                    </div>
                </form>
            </div>
        )
    }
}
export default SearchBar;