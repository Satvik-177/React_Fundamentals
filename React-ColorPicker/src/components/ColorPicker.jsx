import {React,useState} from 'react'
import "./ColorPicker.css"

const ColorPicker = () => {

const[color,SetColor] = useState("green");
const[bgColor,SetbgColor] = useState("black")

function handleChange(e){
  SetColor(e.target.value)
}

function handleClick(){
  SetbgColor(color);
}

  return (
    <div className = "Class-Picker" style={{backgroundColor: bgColor}}>

        <div id="user-color">
            <select id="colors" name="colors" onChange = {handleChange}>
                <option value="" disabled selected>{color}</option>
                <option value="green">Green</option>
                <option value="orange">Orange</option>
                <option value="Red">Red</option>
                <option value="Yellow">Yellow</option>
                <option value="Blue">Blue</option>
                <option value="Violet">Violet</option>
            </select>
        </div>
        <div id="changeColor-btn">
          <button id="btn" onClick={handleClick}>Click here</button>
        </div>
    </div>
  )
}

export default ColorPicker
