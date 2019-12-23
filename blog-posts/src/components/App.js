import React from 'react';

import PostsList from './PostsList';

class App extends React.Component {
    render() {
        return (
            <div className="ui container">
                <PostsList />
            </div>
        );
    };
}

export default App;