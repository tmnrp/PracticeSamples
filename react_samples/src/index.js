import React from 'react';
import ReactDOM from 'react-dom';
import PicsApp from './projects/pics/components/App';
import VideosApp from './projects/videos/components/VideosApp'

class App extends React.Component {
    render() {
        //return (<PicsApp />);
        return (<VideosApp />);
    };
}

ReactDOM.render(<App />, document.querySelector('#root'));