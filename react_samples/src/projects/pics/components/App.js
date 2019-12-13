import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends React.Component {
    state = { images: [] };

    onSearchBarSubmit = (searchKey) => {
        axios.get('https://api.unsplash.com/search/photos', {
            params: {
                query: searchKey
            },
            headers: {
                Authorization: 'Client-ID 698b5409d7c806c6982ec216e65d068f5851b04d470fc6729457ae908b78bb18'
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
            </div>
        );
    };
}

export default App;