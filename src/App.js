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
    dispatch({type:'INCREMENT', payload:{id:countNum,}})
  }
  let decrementNumber = ()=> {
    dispatch ({type: 'DECREMENT'})
  }
  let reset = () => {
    dispatch({ type: 'RESET'})
  }
  

let renderBox = () => {
  console.log("boxList", boxList)
  return boxList && boxList.map((item, index) => <Box id={index} />)
}
let backgroundChange = (color) => {
  dispatch ({type: 'BACKGROUNDCOLOR', payload:color})
}
 



  return (
    <div style={{ display: "flex", justifyContent:"center",}} >
      <div style={{ display: "flex", flexDirection:"column" }}>

      <h3 style={{ textAlign: "center"}}>Boxes: {countNum}</h3>
      <Button  variant="success" onClick={() => incrementNumber()}>Increment</Button>
      <Button variant="warning" onClick={() => decrementNumber()}>Decrement</Button>
      <Button variant="danger" onClick={() => reset()}>Reset</Button>
      <input style={{border:"1px solid grey", borderRadius:"5px", textAlign:"center", backgroundColor:"lightgrey"}} onChange = {e=>backgroundChange(e.target.value)} type="text" placeholder="Color"></input>
      {renderBox()}

      </div>
    </div>
   
  );
}

export default App;
