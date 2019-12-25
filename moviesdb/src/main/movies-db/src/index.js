import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import combineReducers from './reducers';

import App from './components/App';

ReactDOM.render(<div>
    <Provider store={createStore(combineReducers, applyMiddleware(thunk))}>
        <App />
    </Provider>
</div>, document.querySelector('#root'));