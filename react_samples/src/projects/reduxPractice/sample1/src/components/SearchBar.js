import React from 'react';

class SearchBar extends React.Component {
    state = { searchText: '' };

    onFormSubmit = (event) => {
        event.preventDefault();

        // update the state value searchText
    };

    onSearchTextChange = (event) => {
        this.setState({
            searchText: event.target.value
        });
    };

    render() {
        return (
            <div className="ui container">
                <div className="ui segment">
                    <form className="ui form" onSubmit={(e) => { this.onFormSubmit(e) }}>
                        <div className="field">
                            <input
                                value={this.state.searchText}
                                type="text" onChange={(e) => { this.onSearchTextChange(e) }}
                            />
                        </div>
                    </form>
                </div>
            </div>
        );
    };
};

export default SearchBar;