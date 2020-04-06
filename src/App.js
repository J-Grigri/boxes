import React from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import Box from './componenets/Box';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap'

function App() {
  //bring in count number object
  let countNum = useSelector(state=>state.countNum);
  //bring in boxList Array
  let boxList = useSelector(state=>state.boxList);

  //dispatch will send the data to reducer in index.js
  let dispatch = useDispatch();

  let incrementNumber = () => {
    dispatch({type:'INCREMENT', payload:{id:countNum, color:"black"}})
  }
  let decrementNumber = ()=> {
    dispatch ({type: 'DECREMENT'})
  }
  let reset = () => {
    dispatch({ type: 'RESET'})
  }
  let BoxList = () => {
    return boxList.map((item) => <Box/>)
}



 



  return (
    <div id="appArea">
      <h2>Boxes: {countNum}</h2>

      
      <Button variant="success" onClick={() => incrementNumber()}>Increment</Button>
      <Button variant="warning" onClick={() => decrementNumber()}>Decrement</Button>
      <Button variant="danger" onClick={() => reset()}>Reset</Button>
      <input type="text" placeholder="Color"></input>
      
      <BoxList/>
    </div>
  );
}

export default App;
