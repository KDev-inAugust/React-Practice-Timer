import { clear } from '@testing-library/user-event/dist/clear';
import React, {useState, useEffect} from 'react';
import { render } from 'react-dom';
import '../App.css';





function App() {

  //-------create the timer-------

  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [pause, setPause] = useState(false);
  const [intervalStart, setIntervalStart] = useState(new Date().toLocaleTimeString())


  function Transport (){
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
      setIntervalStart(new Date().toLocaleTimeString())
    }
    return (
      <div>
        <button onClick={handleStart}>  Start</button>
        <button onClick={handlePauseCLick}>Pause/Stop</button>
        <button onClick={handleResetClick}>Reset</button>
        <br></br>
        <button>Log Interval</button>
      </div>
    )
  }

  //---------time stamp info-----------


    let day = new Date().getDate()
    let month = new Date().getMonth();
    let year = new Date().getFullYear();
    
  
  
 useEffect(  () => {
  const timer = () => {
      setSeconds(seconds + 1);
     
  }
  // set the seconds to minutes turnover
  if (seconds === 60) {
      setMinutes(minutes+1);
      setSeconds(0);
  }
  const id = setInterval(timer, 1000);
  if (pause===true){
    clearInterval(id)
  }
  
  return function cleanup () {clearInterval(id)};
},
[seconds, pause]
);

  return (
    <div className="App">
      {'current interval duration:'}
      <br></br>
        {`${minutes}:${seconds} on:  ${month}/ ${day}/ ${year} at:${intervalStart}`}
      <Transport />
    </div>
  );
}

export default App;
