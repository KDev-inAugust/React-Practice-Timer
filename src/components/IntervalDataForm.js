import React, {useState} from "react";


//-------------Interval Data Component--------

function IntervalDataInput (){
const [intervalName, setIntervalName]=useState("")

  function handleSubmit(e){
    e.preventDefault();
  }

  function handleIntDescripChange(e){
    setIntervalName(e.target.value)
  }

  function handleLogClick(e){
    console.log(intervalName)
  }

  return (
        <form onSubmit={handleSubmit}>
          <input onChange={handleIntDescripChange} type="text" placeholder="interval name"></input>
          <button onClick={handleLogClick}>Log Interval</button>
        </form>
  )
}

export default IntervalDataInput;