import React from 'react';

class Carousel extends React.Component {

    render() {
        if (!this.props.moviesData) {
            return <div >Empty</div>;
        }
        const activeCarouselCount = 0;
        return (
            <div className="row no-gutters">
                <div className="col">
                    <img
                        src="https://images.unsplash.com/photo-1543536448-d209d2d13a1c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
                        height="100%"
                        width="100%"
                    />
                </div>
                <div className="col-8">
                    <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            {this.props.moviesData.map((movie, index) => {
                                return (
                                    <li
                                        data-target="#carouselExampleCaptions"
                                        data-slide-to={index}
                                        className={(index === 0) ? "active" : ""}></li>
                                );
                            })}
                        </ol>
                        <div className="carousel-inner">
                            {this.props.moviesData.map((movie, index) => {
                                return (
                                    <div key={movie.id} className={(index === 0) ? "carousel-item active" : "carousel-item"}>
                                        <img
                                            src={movie.imgCarousel}
                                            height="250"
                                            width="100%"
                                        />
                                        <div className="carousel-caption d-none d-md-block">
                                            <h5>{movie.imgTitle}</h5>
                                            <p>{movie.imgDescription}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
                <div className="col">
                    <img
                        src="https://images.unsplash.com/photo-1484662020986-75935d2ebc66?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
                        height="100%"
                        width="100%"
                    />
                </div>
            </div>
        );
    };
}

export default Carousel;