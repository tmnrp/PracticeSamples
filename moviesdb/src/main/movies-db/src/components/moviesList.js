import React from 'react';
import MovieItem from './movieItem';

class MoviesList extends React.Component {

    getDisplayPictureImgSrcFromMovies = (movie) => {
        const img= movie.images.filter(function(img){
            return img.type === 'DISPLAY_PICTURE'
        });
        if (img.length > 0) {
            return {src: img[0].src, altText: img[0].altText};
        }
    };

    render() {
        if (!this.props.moviesData) {
            return <div >Empty List</div>;
        }
        return (
            <div className="row">
                {this.props.moviesData.map((movie) => {
                    const displayImage= this.getDisplayPictureImgSrcFromMovies(movie);
                    return (
                        <div key={movie.id} className="col">
                            <MovieItem
                                imgHeight={movie.imgHeight}
                                imgAltText={displayImage.altText}
                                imgSrc={displayImage.src}
                                imgTitle={movie.title}
                                imgDescription={movie.description}
                            />
                        </div>
                    );
                })}
            </div>
        );
    };
}

export default MoviesList;