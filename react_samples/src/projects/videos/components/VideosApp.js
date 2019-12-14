import React from 'react';
import VideosSearchBar from './VideosSearchBar';
import ApiYoutubeAxios from '../api/ApiYoutubeAxios';
import VideoList from './VideoList';

class VideosApp extends React.Component {

    state = { searchKey: '', videos: [] };

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
            this.setState({videos: response.data.items});
        });
    }

    render() {
        return (
            <div className='ui container' style={{ marginTop: '10px' }}>
                <VideosSearchBar onSearchBarSubmit={this.onSearchBarSubmit} />
                <VideoList videos={this.state.videos} />
            </div>
        );
    }
}

export default VideosApp;