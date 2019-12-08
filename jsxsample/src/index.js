// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

function getText(str) {
    return str;
}

// Create a react component
const App = function () {
    const buttonText = {text: 'Click me !'};
    const styleObj = { backgroundColor: 'pink', color: 'white' };
    return (
        <div>
            <label className="label" htmlFor="name">
                Enter Name:
            </label>
            <input id="name" type="text" />
            <button style={styleObj}>
                {buttonText.text}
            </button>
        </div>
    );
}


// Take the react component and show it on the screen
ReactDOM.render(
    <App />, document.querySelector('#root')
)