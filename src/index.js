import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from 'redux-thunk';
import {replateReducer} from './components/store/reducers/replateReducer';

import {BrowserRouter as Router} from 'react-router-dom';
const store =createStore(replateReducer, applyMiddleware(thunk));

ReactDOM.render(
  <React.StrictMode>
  <Provider store={store}>
    <Router>
    <App />
    </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

