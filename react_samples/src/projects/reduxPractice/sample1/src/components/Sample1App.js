import React from 'react';
import SongDetails from './SongDetails';
import SongList from './SongList';
import SearchBar from './SearchBar';

class Sample1App extends React.Component {
    state = { selectedSong: '' };

    onSelectClick = (song) => {
        this.setState({
            selectedSong: song
        });
    };

    render() {
        return (
            <div className="ui container">
                <div style={{ textAlign: "center", margin: "20px" }}>Sample 1 App</div>
                <SearchBar />
                <div className="ui segment">
                    <div className="ui grid">
                        <div className="ui row">
                            <div className="thirteen wide column">
                                <SongList onSelectClick={this.onSelectClick} />
                            </div>
                            <div className="three wide column">
                                <SongDetails selectedSong={this.state.selectedSong} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
};

export default Sample1App;