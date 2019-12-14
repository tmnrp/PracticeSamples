import React from 'react';

class VideoList extends React.Component {

    render() {
        var videos = this.props.videos.map((video) => {
            return (
                <div key={video.id.videoId}>
                    {video.snippet.title}
                </div>
            );
        });
        return (
            <div >
                {videos}
            </div>
        );
    };
}

export default VideoList;