import React from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongsList extends React.Component {

    renderList() {
        return this.props.songs.map((song) => {
            return (
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <button
                            className="ui button primary"
                            onClick={() => this.props.selectSong(song)}
                        >
                            Select
                        </button>
                    </div>
                    <div className="content">{song.title}</div>
                </div>
            );
        });
    };

    render() {
        return (
            <div className="ui container">
                <div className="ui segment">
                    <div className="ui divided list">{this.renderList()}</div>
                </div>
            </div>
        );
    };
}

const mapStateToProps = (state) => {
    console.log(state);
    return state;
}

export default connect(mapStateToProps, {
    selectSong: selectSong
})(SongsList);