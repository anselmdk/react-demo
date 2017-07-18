import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


import { Provider } from 'react-redux';
import store from './store';
import defaultAction from './defaultAction';

import Form from './Form';


const rootEl = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <App>
      <Form onSubmit={defaultAction} />
    </App>
  </Provider>,
  rootEl,
);
registerServiceWorker();
