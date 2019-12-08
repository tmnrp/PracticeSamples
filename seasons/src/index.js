import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

const App = () => {

    window.navigator.geolocation.getCurrentPosition(
        (position) => {
            console.log(position);
        },
        (errorMsg) => {
            console.log(errorMsg);
        }
    );

    return (
        <div >
            Hello World
        <SeasonDisplay />
        </div>
    );
}

ReactDOM.render(
    <App />, document.querySelector('#root')
);