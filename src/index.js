import store from './redux/store';
import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';

let rerenderEntireTree = (state) => {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <App state={state} dispatch={store.dispatch.bind(store)} store={store} />
  );
};

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);
