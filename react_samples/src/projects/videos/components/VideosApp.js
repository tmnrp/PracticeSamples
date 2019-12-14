import React from 'react';
import VideosSearchBar from './VideosSearchBar';
import ApiYoutubeAxios from '../api/ApiYoutubeAxios';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class VideosApp extends React.Component {

    state = { searchKey: '', videos: [], selectedVideo: null };

    onSearchBarSubmit = (text) => {
        console.log(text);
        ApiYoutubeAxios.get('/search', {
            params: {
                q: text,
                part: 'snippet',
                maxResult: 5,
                key: 'AIzaSyCxJ9pAbW8rl3j58Y8whQ_UAs0AB0YQ0i0',
                type: 'video'
            }
        }).then((response) => {
            this.setState({ videos: response.data.items });
        });
    }

    onVideoClick = (video) => {
        this.setState({ selectedVideo: video });
    }

    render() {
        return (
            <div className='ui container' style={{ marginTop: '10px' }}>
                <VideosSearchBar onSearchBarSubmit={this.onSearchBarSubmit} />
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo} />
                        </div>
                        <div className="five wide column">
                            <VideoList videos={this.state.videos}
                                onVideoClick={this.onVideoClick}
                                selectedVideo={this.state.selectedVideo}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default VideosApp;