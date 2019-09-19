import React from 'react';
import youtube from '../apis/youtube';
import SearchBar from './searchBar';
import VideoList from './VideoList';

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
                <VideoList videos={this.state.videos}/>
            </div>
        )
    }
}
export default App;