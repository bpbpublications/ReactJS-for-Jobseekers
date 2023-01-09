import React from 'react';
import ReactDOM from 'react-dom';
import {combineReducers, createStore} from 'redux';
import {Provider} from 'react-redux';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { dislikeReducer } from './reducers/dislikeReducer';
import { likeReducer } from './reducers/likeReducer';

const mainReducer = combineReducers({
  //We gotta define a top-level state variable name handled by both reducers
  like: likeReducer,
  dislike: dislikeReducer
})

let globalStore = createStore(mainReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={globalStore}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
