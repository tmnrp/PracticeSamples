import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';
import thunk from 'redux-thunk';

ReactDOM.render(
    <div>
        <Provider store={createStore(reducers, applyMiddleware(thunk))}>
            <App />
        </Provider>
    </div>,
    document.querySelector('#root')
);