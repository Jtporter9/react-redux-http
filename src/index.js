import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
//REDUX DEPENDENCIES
import { createStore } from 'redux';
import reducer from './store/reducer.js';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//Axios Base URL
axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';

// Redux Store
const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById( 'root' ) );
registerServiceWorker();
