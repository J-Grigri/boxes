import React from 'react';
import '../App.css';
import {useSelector, useDispatch} from 'react-redux';


export default function Box(props) {

    let dispatch = useDispatch();
    let boxColor = useSelector(state => state.backgroundColor)//boxList 
    let singleColor = useSelector(state=>state.boxList[props.id])//single box

    let changeSingleColor = (color) => {
        dispatch ({type: "SINGLECOLOR" , payload:{color:color, id:props.id}})
    }
    return (
        
        <div id="Box" style={{display: "flex", justifyContent: "center", flexDirection:"column", textAlign:"center", border: "1px solid black", backgroundColor: singleColor===""?boxColor:singleColor}}> 

        Color Box {props.id+1}
        <input placeholder="box color?" style={{width:"50%"}} onChange={(e)=>changeSingleColor(e.target.value)}/>
        
        </div>
    )
}
