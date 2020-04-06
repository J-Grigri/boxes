import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux'
import { Provider } from 'react-redux'

//Storee
let initialState ={
  countNum : 0,
  boxList: [],
  boxId: 0
}


function countReducer (state=initialState, action){
  if (action.type === 'INCREMENT'){
    state.countNum ++;
    state.boxList.push(action.payload);
    
    
    
  }
  else if (action.type === 'DECREMENT'){
    if (state.countNum >= 1){
      state.countNum --;
      state.boxList.pop(action.payload)

    }
  }
  else if(action.type === 'RESET'){
    state.countNum = 0;
    state.boxList = []
  }
  return state
}
const store = createStore(countReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
  <Provider store = {store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


serviceWorker.unregister();
