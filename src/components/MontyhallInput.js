import React, { Component, useState } from 'react';
import Results from './Results.js';
import axios  from 'axios';
import { render } from '@testing-library/react';



const MontyhallInput  = () => {   
   const [inputData,setInputData] = useState() 
   const [inputChoice,setInputChoice] = useState(false)  
   const [result,setResult] = useState() 
   const [choice,setChoice] = useState() 
   
   const handleChange = event => {
    setInputData(event.target.value);
  };

  const handleChoiceChange = event => {
    setInputChoice(event.target.checked);
  };

   const getResult = () =>
   {
    if(inputData <= 0)
        alert("Please Enter No of Games greater than 0")
    setChoice(inputChoice)
    const data = {inputData,inputChoice}       
    axios({
        method: 'post',
        url: 'https://localhost:7067/MontyHallSimulation/Results',
        data            
    }).then(Response => setResult(Response))
        .catch(error => console.log(error))
   }

    return (
        <div>
            <label>No Of Games : </label> 
            <input type='number' name="inputData" onChange={handleChange} value={inputData}/>
            <div className='marginTop'>
                <label>Switch Choice</label>
                <input type="checkbox" name="SwichChoice" onChange={handleChoiceChange}  />
            </div>
            <div className='marginTop'>
                <button data-testid="btn-submit" onClick={getResult}>Submit</button>
            </div>
            { result ? <Results SwitchChoice={choice} data ={result}/> : null }
            
        </div>
        
    ) 

   
}

export default MontyhallInput;