import React from 'react';
import SongsList from './SongsList';
import SongItem from './SongItem';

class MainApp extends React.Component {

    render() {
        return (
            <div className="ui container">
                <div className="ui segment">
                    <div className="ui grid">
                        <div className="ui row">
                            <div className="ten wide column">
                                <SongsList />
                            </div>
                            <div className="five wide column">
                                <SongItem />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}

export default MainApp;