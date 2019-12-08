import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = { isLocationAllowed: false, latitude: null, errMsg: '' };

        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({
                    isLocationAllowed: true,
                    latitude: position.coords.latitude
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

    componentWillMount() {
        console.log('componentWillMount');
    }

    componentDidMount() {
        console.log('componentDidMount');
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
            text = 'Latitude';
            value = this.state.latitude;
        } else if (!this.state.latitude && this.state.errMsg) {
            text = 'Error';
            value = this.state.errMsg;
        } else {
            text = 'Loading';
            value = '...';
        }
        return <div >
            {text} : {value}
        </div>;
    }
}

ReactDOM.render(
    <App />, document.querySelector('#root')
);