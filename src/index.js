import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';

import store from './redux/store/store';

import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
const element = (
  <Provider store={store}>
    <App />
  </Provider>
);
root.render(element);

reportWebVitals();
