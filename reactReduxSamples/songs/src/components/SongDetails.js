import React from 'react';
import { connect } from 'react-redux';

class SongDetails extends React.Component {
    render() {
        return (
            <div >
                <div >{this.props.selectedSong.title}</div>
                <div >{this.props.selectedSong.duration}</div>
            </div>
        );
    };
}

const mapStateToProps = (state) => {
    return state;
};

export default connect(mapStateToProps)(SongDetails);