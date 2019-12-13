import React from 'react';

class SearchBar extends React.Component {
    state = { searchKey: '', isUpper: 'off' };

    onInputTextChange(event) {
        var searchKey = (this.state.isUpper ? event.target.value.toUpperCase() : event.target.value.toLowerCase());
        this.setState({ searchKey: searchKey });
    }

    onInputCheckBoxChange(event) {
        this.setState({ isUpper: event.target.checked });
        this.setState({searchKey: this.state.searchKey});
    }

    render() {
        return (
            <div className='ui segment'>
                <form className='ui form'>
                    <div className='field'>
                        <label >Image search :</label>
                        <input type='checkbox' value={this.state.isUpper} onChange={this.onInputCheckBoxChange.bind(this)} />
                        <input type='text' value={this.state.searchKey} onChange={this.onInputTextChange.bind(this)} />
                    </div>
                </form>
            </div>
        );
    };
}

export default SearchBar;