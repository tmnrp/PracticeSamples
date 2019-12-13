import './ImageList.css';
import React from 'react';
import ImageCard from './ImageCard';

class ImageList extends React.Component {
    render() {
        return (
            <div className='image-list'>
                {this.props.images.map((image) => {
                    return <ImageCard image={image} key={image.id} />
                })}
            </div>
        );
    };
}

export default ImageList;