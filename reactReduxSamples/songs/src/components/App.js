import React from 'react';
import SongsList from './SongsList';
import SongDetails from './SongDetails';

class App extends React.Component {
    render() {
        return (
            <div >
                <div ><SongsList /></div>
                <div ><SongDetails /></div>
            </div>
        );
    };
}

export default App;