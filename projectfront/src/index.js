import React from "react";
import ReactDOM from "react-dom";
import { createStore, compose, applyMiddleware } from "redux";
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

import "./index.css";

import App from "./App";

const __DEV__ = process.env.NODE_ENV;

export const store = __DEV__==='development' ? createStore(
    reducers,
    compose(
      applyMiddleware(thunk),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    )
  ) : createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(<Provider store={store} ><App /></Provider>, document.getElementById("root"));
