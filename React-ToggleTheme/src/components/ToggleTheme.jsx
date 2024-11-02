import {React,useState} from 'react'
import "./ToggleTheme.css"

const ToggleTheme = () => {

const[theme,SetTheme] = useState("white");

function handleClick(e){
    if(e.target.id === "dark-mode"){
        SetTheme("black");
    }
    else if(e.target.id === "light-mode"){
        SetTheme("white");
    }
}

  return (
    <div className="container" style={{ backgroundColor: theme}}>
        <div className="buttons">
            <button id="dark-mode" onClick = {handleClick}>Dark Mode</button>
            <button id="light-mode" onClick = {handleClick}>Ligh Mode</button>
        </div>
    </div>
  )
}

export default ToggleTheme
