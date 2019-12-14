import './VideoItem.css';
import React from 'react';

class VideoItem extends React.Component {

    render() {
        const snippet = this.props.video.snippet;
        return (
            <div className="video-item item"
                onClick={() => this.props.onVideoClick(this.props.video)}>
                <img
                    className="ui image"
                    src={snippet.thumbnails.medium.url}
                />
                <div className="content">
                    <div className="header">{snippet.title}</div>
                </div>
            </div>
        );
    };
}

export default VideoItem;