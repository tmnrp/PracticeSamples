import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = { isLocationAllowed: false, latitude: null, errMsg: ''};

        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({
                    isLocationAllowed: true,
                    latitude : position.coords.latitude
                });
            },
            (msg) => {
                console.log(msg);
                this.setState({
                    errMsg: msg.message
                });
            }
        );
    }

    render() {
        if (this.state.isLocationAllowed) {
            return (
                <div >
                    Hello World : you are in {this.state.latitude}.
                </div>
            );
        }else {
            return <div >
                Sorry : {this.state.errMsg}
            </div>
        }
    }
}

ReactDOM.render(
    <App />, document.querySelector('#root')
);