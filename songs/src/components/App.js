import React from 'react';
import SongsList from './SongsList';
import SongDetails from './SongDetails';
import IncreDecre from './IncreDecre';

class App extends React.Component {
    render() {
        return (
            <div >
                <div ><SongsList /></div>
                <div ><SongDetails /></div>
                <div ><IncreDecre /></div>
            </div>
        );
    };
}

export default App;