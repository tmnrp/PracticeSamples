import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import combineReducers from './reducers';

import App from './components/App';

ReactDOM.render(<div>
    <Provider store={createStore(combineReducers)}>
        <App />
    </Provider>
</div>, document.querySelector('#root'));