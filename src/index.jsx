import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import * as actions from './actions/index.js';
import configureStore from './stores/configureStore.js';
import App from './components/App.jsx';

// create store
const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
