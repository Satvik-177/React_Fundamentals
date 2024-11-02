import {React,useState} from 'react'
import "./UserTemp.css"

const UserTemp = () => {

const[inputTemp,SetinputTemp] = useState('');
const[unit,SetUnit] = useState('');
const[temp,SetTemp] = useState('');

function handleClick(){
    if(unit === "farenheit"){
        SetTemp(calTempInFarenheit(inputTemp));
    }
    else if(unit === "celsius"){
        SetTemp(calTempInCelsius(inputTemp));
    }
    else{
        SetTemp("Please select a unit.");
    }
}

function calTempInCelsius(temperature){
    return ((temperature-32)*(5/9)).toFixed(2);
}

function calTempInFarenheit(temperature){
    return ((temperature*(9/5))+32).toFixed(2);
}

function handleInputChange(e){
    SetinputTemp(e.target.value);
}

function handleUnit(e){
    SetUnit(e.target.value);
}


  return (
    <div>
        <div className="temp-converter">
            <div id="converter-interface">
                <div className="header">
                    <h2>Temperature Converter</h2>
                </div>
                <div className="input-fields">
                    <input type="number" placeholder="Enter Temperature" onChange={handleInputChange}></input>
                    <select name="degrees" id="dropdown" onChange={handleUnit}>
                        <option value="" disabled selected hidden>Convert To</option>
                        <option value="celsius">Celsius</option>
                        <option value="farenheit">Farenheit</option>
                    </select>
                    <button id="convert" onClick={handleClick}>Convert</button>
                    <p id="ans">
                        The temperature after conversion is: <span id="ans-temp">{temp}°{unit}</span>
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default UserTemp;
