import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App/App.js';
import { Provider } from 'react-redux';
import store from './App/store';

const rootElement = document.getElementById("root");

ReactDOM.createRoot(rootElement).render(
  <Provider store={store}>
    <App />
  </Provider>
);
