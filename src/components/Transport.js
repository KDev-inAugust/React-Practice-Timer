import React from "react";





function Transport ({pause, setPause, setMinutes, setSeconds, setIntervalStart}){
    function handlePauseCLick(){
      setPause(!pause); 
    }
    function handleResetClick(){
      setPause(true);
      setMinutes(0);
      setSeconds(0);
      setIntervalStart(new Date().toLocaleTimeString())
    }
    function handleStart(){
      setPause(false);
      pause===true ? setIntervalStart(new Date().toLocaleTimeString()) : console.log('no time reset')
      
    }
    return (
      <div>
        <button onClick={handleStart}>  Start</button>
        <button onClick={handlePauseCLick}>Pause/Resume</button>
        <button onClick={handleResetClick}>Reset</button>
        <br></br>
       
      </div>
    )
  }




export default Transport;