import React from 'react';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import MainApp from './components/MainApp';
import reducers from './reducers';

class SongsApp extends React.Component {
    render() {
        return (
            <Provider store={createStore(reducers)}>
                <MainApp />
            </Provider>
        );
    };
}

export default SongsApp;