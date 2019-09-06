import React from 'react';
import SearchBar from './searchBar';
import youtube from '../apis/youtube'

class App extends React.Component {
    state = {
        videos: [],
    }
    KEY = 'AIzaSyA3ZuPnycnkyXtt3NQKM-tQGV-95J_3dGE';
    onTermSubmit = async (term) => {
        const response = await youtube.get('/search', {
            params: {
                part: 'snippet',
                maxResults: 5,
                key: this.KEY,
                q: term
            }
        });
        this.setState({ videos: response.data.items });
    }
    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit} />
                I have {this.state.videos.length} videos.
            </div>
        )
    }
}
export default App;