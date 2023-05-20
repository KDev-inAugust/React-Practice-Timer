import {React, useState} from "react";


//-------------Interval Data Component--------

function IntervalDataInput ({setIntervalName, setIntervalType, handleLogSession, categoryArray}){

const [count, setCount] = useState(0);
const [text, setText] = useState("input")

  function handleSubmit(e){
    e.preventDefault();
  }

  function handleIntDescripChange(e){
    setIntervalName(e.target.value)
  }

  function handleSetIntervalType (e){
    setIntervalType(e.target.value);
  }

  function handleLogClick(e){
    handleLogSession()
  }


  function handleChangeText(e){
    setText(e.target.value);
   
  }

 

  return (
    <div>

        <form id="intervalDataInput" onSubmit={handleSubmit}>
          <input onChange={handleIntDescripChange} type="text" placeholder="interval name"></input>
          <select onChange={handleSetIntervalType } >
                <option>select interval type</option>
                {categoryArray.map((index)=>{
                  return(

                    <option>{`${index.name}`}</option>
                  )
                  
                })}
            </select>
          <button onClick={handleLogClick}>Log Interval</button>

        </form>
        </div>
  )
}

export default IntervalDataInput;