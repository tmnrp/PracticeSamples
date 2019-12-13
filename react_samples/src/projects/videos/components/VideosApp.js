import React from 'react';
import VideosSearchBar from './VideosSearchBar';

class VideosApp extends React.Component {

    state = {searchKey: ''};

    onSearchBarSubmit= (text) => {
        alert(text);
    }

    render() {
        return (
            <div className='ui container' style={{ marginTop: '10px' }}>
                <VideosSearchBar onSearchBarSubmit={this.onSearchBarSubmit}/>
            </div>
        );
    }
}

export default VideosApp;