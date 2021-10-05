import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ReactGA from 'react-ga';
import {applyMiddleware, compose, createStore} from 'redux';
import {Provider} from 'react-redux';
import {rootReducer} from './store/reducers/rootReducer';
import thunk from 'redux-thunk';

export const initGA = () => {       
    ReactGA.initialize('UA-199808031-1'); // put your tracking id here
} 

export const GApageView = (page) => {   
  ReactGA.pageview(page);   
}

const middleware = [thunk];

const enhancers = compose(
  applyMiddleware(...middleware),
  window.__REDUX_DEVTOOLS_EXTENSION__
  ? window.__REDUX_DEVTOOLS_EXTENSION__()
  : f => f
)

const store = createStore(rootReducer, enhancers);

ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
