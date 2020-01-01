import React from 'react';

class MovieItem extends React.Component {

    render() {
        return (
            <div >
                <div className="card" style={{ width: '18rem' }}>
                    <img
                        src={this.props.imgSrc}
                        className="card-img-top"
                        alt={this.props.imgAltText}
                        height={this.props.imgHeight || "200px"}
                    />
                    <div className="card-body">
                        <h5 className="card-title">{this.props.imgTitle}</h5>
                        <p className="card-text">{this.props.imgDescription}</p>
                        <a href="#" className="btn btn-primary">View</a>
                    </div>
                </div>
            </div>
        );
    };

}

export default MovieItem;