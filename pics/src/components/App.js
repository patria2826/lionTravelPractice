import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends React.Component {
    onSearchSubmit(term) {
        axios.get('https://api.unsplash.com/search/photos', {
            params: { query: term },
            headers: {
                Authorization: 'Client-ID a0fe55f0593b2b4456ce67eca10ecdd5d554573093556c683d0b4b6a5c412c97'
            },
        })
    }
    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearchBar onSearchSubmit={this.onSearchSubmit} />
            </div>

        )
    }
}
export default App;