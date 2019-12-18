import React from 'react';

class SongDetails extends React.Component {
    render() {
        return (
            <div >
                {this.props.selectedSong.songName}
            </div>
        );
    };
};

export default SongDetails;