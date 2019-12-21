import React from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongsList extends React.Component {
    render() {
        console.log(this.props);
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
    console.log('state: ', state);
    return state;
};

const mapActionToProps = () => {
    return {
        selectSong: selectSong
    };
};

export default connect(mapStateToProps, {
    selectSong: selectSong
})(SongsList);