import React from 'react';
import MovieItem from './movieItem';

class MoviesList extends React.Component {
    render() {
        if (!this.props.moviesData) {
            return <div >Empty List</div>;
        }
        return (
            <div className="row">
                {this.props.moviesData.map((movie) => {
                    return (
                        <div key={movie.id} className="col">
                            <MovieItem
                                imgHeight={movie.imgHeight}
                                imgAltText={movie.imgTitle}
                                imgSrc={movie.imgSrc}
                                imgTitle={movie.imgTitle}
                                imgDescription={movie.imgDescription}
                            />
                        </div>
                    );
                })}
            </div>
        );
    };
}

export default MoviesList;