import React from 'react';

class SearchBar extends React.Component {
    state = { searchKey: '' };

    onInputTextChange = (event) => {
        this.setState({ searchKey: event.target.value });
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.searchKey);
    }

    render() {
        return (
            <div className='ui segment'>
                <form className='ui form' onSubmit={this.onFormSubmit}>
                    <div className='field'>
                        <label >Image search :</label>
                        <input type='text' value={this.state.searchKey} onChange={this.onInputTextChange} />
                    </div>
                </form>
            </div>
        );
    };
}

export default SearchBar;