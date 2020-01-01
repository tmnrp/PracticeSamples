import React from 'react';

class ImageCard extends React.Component {

    constructor(props) {
        super(props);

        this.state= {spans: 0};
        this.imageRef = React.createRef();
    }

    componentDidMount() {
        this.imageRef.current.addEventListener('load', this.setSpans);
    }

    setSpans = (event) => {
        const clientHeight= this.imageRef.current.clientHeight;
        const spans = Math.ceil(clientHeight / 5);
        console.log('heaight: '+clientHeight+'; span: ' + spans);
        this.setState({spans: (spans + 1)});
    }

    render() {
        const { description, urls } = this.props.image;
        return (
            <div style={{ gridRowEnd: `span ${this.state.spans}`}}>
                <img
                    ref={this.imageRef}
                    alt={description}
                    src={urls.small}
                />
            </div>
        );
    };
}

export default ImageCard;