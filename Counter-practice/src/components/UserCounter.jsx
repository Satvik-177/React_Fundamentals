import React from 'react'
import "./UserCounter.css"
import { useState } from 'react';

const UserCounter = () => {

const[count,SetCount] = useState(0);

    function handleClick(e){

        if(e.target.id === "Decrement"){
            if(count != 0)
              SetCount(count-1);
        }else if(e.target.id === "Increment"){
            SetCount(count+1);
        }else{
            if(count != 0)
                SetCount(0);
        }
    }
  return (
    <div className="body">
        <h1>Counter App</h1>
        <div className='counter'>
            <div className="result">
               <p id="counterValue">{count}</p>
            </div>
            <div className="buttons">
               <button onClick = {handleClick} id="Increment">Increase</button>
               <button onClick = {handleClick} id="Decrement">Decrease</button>
               <button onClick = {handleClick} id="Reset">Reset</button>
            </div>
        </div>
    </div>
    
  )
}

export default UserCounter;
