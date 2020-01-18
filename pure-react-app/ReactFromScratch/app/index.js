var React = require('react');
var ReactDOM = require('react-dom');
require('./index.css');

class App extends React.Component {
    render () {
        return (
            <div>Pure react app</div>
        );
    };
}

ReactDOM.render(
    <div>
        <App />
    </div>,
    document.querySelector('#root')
);