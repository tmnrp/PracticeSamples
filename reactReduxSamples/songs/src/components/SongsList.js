import React from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongsList extends React.Component {
    render() {
        return (
            <div >
                {this.props.getSongsList.map((song) => {
                    return (
                        <div key={song.title}>
                            {song.title}
                            <button onClick={() => this.props.selectSong(song)}>
                                SELECT
                            </button>
                        </div>
                    );
                })}
            </div>
        );
    };
}

const mapStateToProps = (state) => {
    return {
        getSongsList: state.getSongsList,
        selectedSong: state.selectedSong
    };
};

const mapActionToProps = () => {
    return {
        selectSong: selectSong
    };
};

export default connect(mapStateToProps, mapActionToProps())(SongsList);