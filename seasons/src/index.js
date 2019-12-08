import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

class App extends React.Component {
    state = { isLocationAllowed: false, latitude: null, errMsg: '' };

    componentDidMount() {
        console.log('componentDidMount');
        window.navigator.geolocation.getCurrentPosition(
            position => {
                this.setState({
                    isLocationAllowed: true,
                    latitude: position.coords.latitude
                });
            },
            msg => {
                console.log(msg);
                this.setState({
                    errMsg: msg.message
                });
            }
        );
    }

    componentWillMount() {
        console.log('componentWillMount');
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    componentDidUpdate() {
        console.log('componentDidUpdate');
    }

    componentWillUpdate() {
        console.log('componentWillUpdate');
    }

    componentWillReceiveProps() {
        console.log('componentWillReceiveProps');
    }

    componentDidCatch() {
        console.log('componentDidCatch');
    }

    render() {
        console.log('render');
        var text, value;
        if (this.state.latitude && !this.state.errMsg) {
            return <div >
                <SeasonDisplay lalitutde={this.state.latitude}/>
            </div>;
        } else if (!this.state.latitude && this.state.errMsg) {
            return <div >
                Error : {this.state.errMsg}
            </div>;
        } else {
            return <div >
                Loading : ...
            </div>;
        }
    }
}

ReactDOM.render(
    <App />, document.querySelector('#root')
);