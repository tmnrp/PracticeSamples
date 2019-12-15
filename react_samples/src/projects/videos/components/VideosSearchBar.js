import React from 'react';

class VideosSearchBar extends React.Component {
    state = { searchKey: '' };

    onSearchBarTextChange = (event) => {
        this.setState({
            searchKey: event.target.value
        });
    }

    onSearchBarFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSearchBarSubmit(this.state.searchKey);
    }

    render() {
        return (<div className='ui segment'>
            <form className='ui form' onSubmit={this.onSearchBarFormSubmit}>
                <div className='field'>
                    <label >Videos search :</label>
                    <input
                        type='text'
                        value={this.state.searchKey}
                        onChange={this.onSearchBarTextChange}
                    />
                </div>
            </form>
        </div>);
    }
}

export default VideosSearchBar;

