import React from 'react';
import VideoItem from './VideoItem';

class VideoList extends React.Component {

    render() {
        var videoItems = this.props.videos.map((video) => {
            return (
                <VideoItem
                    key={video.id.videoId}
                    video={video}
                    onVideoClick={this.props.onVideoClick}
                    selectedVideo={this.props.selectedVideo}
                />
            );
        });
        return (
            <div className="ui relaxed divided list">
                {videoItems}
            </div>
        );
    };
}

export default VideoList;