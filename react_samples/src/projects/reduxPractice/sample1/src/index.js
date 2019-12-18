import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { _store } from './components/_redux';
import Sample1App from './components/Sample1App';

ReactDOM.render(<div >
    <Provider store={store}>
        <Sample1App />
    </Provider>
</div>, document.querySelector('#root'));