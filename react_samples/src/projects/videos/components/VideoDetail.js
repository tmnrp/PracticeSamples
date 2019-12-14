import React from 'react';

class VideoDetail extends React.Component {

    render() {
        const video = this.props.video;
        if (!video) {
            return <div >Loading...</div>
        }
        const url = 'https://www.youtube.com/embed/' + video.id.videoId;
        return (
            <div className="ui segment">
                <div className="ui embed">
                    <iframe src={url}></iframe>
                </div>
                <h4 className="ui header">{video.snippet.title}</h4>
                <p>{video.snippet.description}</p>
            </div>
        );
    };
}

export default VideoDetail;