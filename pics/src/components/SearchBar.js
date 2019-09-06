import React from 'react'

class SearchBar extends React.Component {
    state = { term: '' };
    // The "this" inside the callback function of onSubmit is not the class itself.
    // You have to bind "this" to the class by yourself.
    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSearchSubmit(this.state.term);
    }
    render() {
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}> {/* //"onFormSubmit" passes data to "onFormSubmit" of parent */}
                
                    <div className="field">
                        <label>Image Search</label>
                        <input
                            type="text"
                            value={this.state.term} //this replace the things user keyed inside the search bar(below is an example)
                            // value={'this.state.term'} //
                            onChange={(e) => this.setState({ term: e.target.value })}>
                        </input>
                    </div>
                </form>
            </div>
        )
    }
}
export default SearchBar;