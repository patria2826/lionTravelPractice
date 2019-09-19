import React from 'react';
import youtube from '../apis/youtube';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component {
    state = {
        videos: [],
        selectedVideo: null,
        searchTerm: 'cats'
    }

    KEY = 'AIzaSyA3ZuPnycnkyXtt3NQKM-tQGV-95J_3dGE';

    componentDidMount() {
        this.onTermSubmit(this.state.searchTerm);
    }

    onTermSubmit = async (term) => {
        const response = await youtube.get('/search', {
            params: {
                part: 'snippet',
                maxResults: 5,
                key: this.KEY,
                q: term
            }
        });
        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0],
            searchTerm: term
        });
    }

    onVideoSelect = (video) => {
        console.log('From the App', video);
        this.setState({ selectedVideo: video })
    }

    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit} />
                <h2 className="ui header">You are searching for: "{this.state.searchTerm}"</h2>
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail selectedVideo={this.state.selectedVideo} />
                        </div>
                        <div className="five wide column">
                            <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default App;