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
   

    let pauseButtonClass=pause===true? 'paused' : 'running';

    return (
      <div className="transport">
        <button onClick={handlePauseCLick} className={pauseButtonClass}>{pause === true ? 'Start': 'Pause'}</button>
        <button onClick={handleResetClick}>Reset</button>
        <br></br>
       
      </div>
    )
  }




export default Transport;