import React from 'react';
import ReactDOM from 'react-dom';
import PicsApp from './projects/pics/components/App';
//import VideosApp from './projects/videos/components/VideosApp';
import SongsApp from './projects/songs/SongsApp';

class App extends React.Component {
    render() {
        //return (<PicsApp />);
        //return (<VideosApp />);
        return (
            <SongsApp />
        );
    };
}

ReactDOM.render(<App />, document.querySelector('#root'));