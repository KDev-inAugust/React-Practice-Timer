import { clear } from '@testing-library/user-event/dist/clear';
import React, {useState, useEffect} from 'react';
import { render } from 'react-dom';
import '../App.css';





function App() {

  //-------create the timer-------

  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [pause, setPause] = useState(false);


  function Transport (){
    function handlePauseCLick(){
      setPause(!pause); 
    }
    function handleResetClick(){
      setPause(true);
      setMinutes(0);
      setSeconds(0);
    }
    function handleStart(){
      setPause(false)
    }
    return (
      <div>
        <button onClick={handleStart}>  Start</button>
        <button onClick={handlePauseCLick}>Pause</button>
        <button onClick={handleResetClick}>Reset</button>
      </div>
    )
  }
  
  
 useEffect(  () => {
  const timer = () => {
      setSeconds(seconds + 1);
      //console.log('seconds incremented')
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

//console.log('outsideeffect')

  return (
    <div className="App">
      {`${minutes}:${seconds}`}
      <Transport />
    </div>
  );
}

export default App;
