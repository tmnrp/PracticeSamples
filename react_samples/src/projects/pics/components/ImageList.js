import './ImageList.css';
import React from 'react';

class ImageList extends React.Component {
    render() {
        var imageListTags = this.props.images.map(({ id, urls, description }) => {
            return <img alt={description} src={urls.thumb} key={id} />
        });

        return (
            <div className='image-list'>
                {imageListTags}
            </div>
        );
    };
}

export default ImageList;