import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';

ReactDOM.render(
    <div>
        <Provider store={createStore(reducers)}>
            <App />
        </Provider>
    </div>,
    document.querySelector('#root')
);