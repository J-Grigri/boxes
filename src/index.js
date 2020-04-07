import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux'
import { Provider } from 'react-redux'


//Store
let initialState ={
  countNum : 0,
  boxList: [],
  boxId: 0,
  backgroundColor: ""
}


function countReducer (state=initialState, action){
  if (action.type === 'INCREMENT'){
    state.countNum ++;
    state.boxList.push('');
    
  }
  else if (action.type === 'DECREMENT'){
    if (state.countNum >= 1){
      state.countNum --;
      state.boxList.pop('')

    }
  }
  else if(action.type === 'RESET'){
    state.countNum = 0;
    state.boxList = []
  }
  else if(action.type === 'BACKGROUNDCOLOR'){
    state.backgroundColor = action.payload
  }
  else if (action.type === 'SINGLECOLOR'){
    state.boxList[action.payload.id] = action.payload.color
  }
  return state
}
const store = createStore(countReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


serviceWorker.unregister();
