import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { _store } from './components/_redux';

import App from './components/App';

ReactDOM.render(
    <Provider store={_store}>
        <div >
            <App />
        </div>
    </Provider>
    , document.querySelector('#root'));