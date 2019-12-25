import React from 'react';
import MovieItem from './movieItem';

class MoviesList extends React.Component {

    render() {
        return (
            <div className="row">
                <div className="col">
                    <MovieItem
                        imgHeight=""
                        imgAltText="Superman"
                        imgSrc="https://images.thesouledstore.com/public/theSoul/uploads/catalog/product/20190319091650-1.jpg"
                    />
                </div>
                <div className="col">
                    <MovieItem
                        imgHeight=""
                        imgAltText="Batman"
                        imgSrc="https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
                    />
                </div>
                <div className="col">
                    <MovieItem
                        imgHeight=""
                        imgAltText="Spiderman"
                        imgSrc="https://images.thesouledstore.com/public/theSoul/uploads/catalog/product/20190305120536-1.jpg"
                    />
                </div>
                <div className="col">
                    <MovieItem
                        imgHeight=""
                        imgAltText="Wonderwoman"
                        imgSrc="https://images.thesouledstore.com/public/theSoul/uploads/catalog/product/1546675085_DC_WonderWoman_PrincessDiana_Tshirt_SqImg.jpg"
                    />
                </div>
                <div className="col">
                    <MovieItem
                        imgHeight=""
                        imgAltText="Infinity Stones"
                        imgSrc="https://images.thesouledstore.com/public/theSoul/uploads/catalog/product/20190215235350-1.jpg"
                    />
                </div>
                <div className="col">
                    <MovieItem
                        imgHeight=""
                        imgAltText=""
                        imgSrc="https://images.unsplash.com/photo-1513381958995-63fd0b0c8246?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
                    />
                </div>
                <div className="col">
                    <MovieItem
                        imgHeight=""
                        imgAltText=""
                        imgSrc="https://images.unsplash.com/photo-1513381958995-63fd0b0c8246?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
                    />
                </div>
                <div className="col">
                    <MovieItem
                        imgHeight=""
                        imgAltText=""
                        imgSrc="https://images.unsplash.com/photo-1513381958995-63fd0b0c8246?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
                    />
                </div>
                <div className="col">
                    <MovieItem
                        imgHeight=""
                        imgAltText=""
                        imgSrc="https://images.unsplash.com/photo-1513381958995-63fd0b0c8246?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
                    />
                </div>
                <div className="col">
                    <MovieItem
                        imgHeight=""
                        imgAltText=""
                        imgSrc="https://images.unsplash.com/photo-1513381958995-63fd0b0c8246?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
                    />
                </div>
            </div>
        );
    };

}

export default MoviesList;