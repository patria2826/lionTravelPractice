import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {
    state = {
        images: []
    }
    onSearchSubmit = async (term) => {
        // if you don't bind "this" to App here, the "this" of this function points to the props object that was passed to SearchBar
        const response = await unsplash.get('/search/photos', {
            params: { query: term },
        });
        this.setState({ images: response.data.results });
    }
    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearchBar onSearchSubmit={this.onSearchSubmit} />
                <ImageList images={this.state.images}/>
            </div>
        )
    }
}
export default App;