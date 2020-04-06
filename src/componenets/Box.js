import React from 'react';
import '../App.css';
import {useSelector} from 'react-redux';


export default function Box() {
    let boxId = useSelector(state => state.boxId);
    return (
        <div id="Box" >
            <input placeholder="color" ></input>
        </div>
    )
}
