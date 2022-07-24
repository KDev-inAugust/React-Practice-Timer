import React, {useState} from "react";


//-------------Interval Data Component--------

function IntervalDataInput ({setIntervalName, setIntervalType, handleLogSession}){


  function handleSubmit(e){
    e.preventDefault();
  }

  function handleIntDescripChange(e){
    setIntervalName(e.target.value)
  }

  function handleSetIntervalType (e){
    setIntervalType(e.target.value);
    console.log(e.target.value)
  }

  function handleLogClick(e){
    handleLogSession()
  }

  return (
        <form onSubmit={handleSubmit}>
          <input onChange={handleIntDescripChange} type="text" placeholder="interval name"></input>
          <select onChange={handleSetIntervalType } >
                <option>select interval type</option>
                <option value="instrument">instrument</option>
                <option value="composition">composition</option>
            </select>
          <button onClick={handleLogClick}>Log Interval</button>

        </form>
  )
}

export default IntervalDataInput;