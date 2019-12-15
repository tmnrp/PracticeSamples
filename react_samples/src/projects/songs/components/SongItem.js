import React from 'react';
import { connect } from 'react-redux';

class SongItem extends React.Component {
    render() {
        console.log('this: ', this.props.song);
        const title = this.props.song ? this.props.song.title : 'No song selected';
        return (
            <div className="ui segment">
                Song: {title}
            </div>
        );
    };
}

const mapStateToProps = (state) => {
    return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongItem);