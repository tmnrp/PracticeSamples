import React from 'react';
import ReactDOM from 'react-dom';
import PicsApp from './projects/pics/components/App';

class App extends React.Component {
    render() {
        return (<PicsApp />);
    };
}

ReactDOM.render(<App />, document.querySelector('#root'));