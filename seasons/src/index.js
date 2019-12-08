import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = { latitude: 10 };

        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                console.log(position);
                this.setState({ latitude: position.coords.latitude });

            },
            (errorMsg) => {
                console.log(errorMsg);
            }
        );
    }

    render() {
        return (
            <div >
                Hello World : you are in {this.state.latitude}.
            </div>
        );
    }
}

ReactDOM.render(
    <App />, document.querySelector('#root')
);