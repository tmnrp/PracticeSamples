import React from 'react';
import Axios from '../api/Axios';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class PicsApp extends React.Component {
    state = { images: [], imagesLength: 0 };

    onSearchBarSubmit = (searchKey) => {
        Axios.get('/search/photos', {
            params: {
                query: searchKey
            }
        }).then((response) => {
            var results = response.data.results;
            this.setState({ images: results });
            this.setState({ imagesLength: results.length });
            console.log(results);
        });
    };

    render() {
        return (
            <div className='ui container' style={{ marginTop: '10px' }}>
                <SearchBar onSubmit={this.onSearchBarSubmit} />
                <label >Found : {this.state.imagesLength} images.</label>
                <ImageList images={this.state.images} imagesLength={this.state.imagesLength} />
            </div>
        );
    };
}

export default PicsApp;