import { clear } from '@testing-library/user-event/dist/clear';
import React, {useState, useEffect} from 'react';
import { render } from 'react-dom';
import '../App.css';
import IntervalDataInput from './IntervalDataForm';
import IntervalList from './IntervalList';
import Transport from './Transport';
import Timer from './Timer';




function App() {


  const [intervalData, setIntervalData] =useState([])
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [pause, setPause] = useState(true);
  const [intervalStart, setIntervalStart] = useState(new Date().toLocaleTimeString())

useEffect(()=>{
  fetch("http://localhost:3000/intervals")
  .then(res=>res.json())
  .then(data=>setIntervalData(data));
},[])

  useEffect(  () => {
    //--------timer base functionality--------
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

  //---------time stamp info-----------
    let day = new Date().getDate()
    let month = new Date().getMonth();
    let year = new Date().getFullYear();
    
  
  
  return (
    <div className="App">
      {'current interval duration:'}
      <br></br>
      <Timer minutes={minutes} seconds={seconds} month={month} day={day} year={year} intervalStart={intervalStart}/>
      <IntervalDataInput />
      <br></br>
      <Transport pause={pause} setPause={setPause} setMinutes={setMinutes} setSeconds={setSeconds} setIntervalStart={setIntervalStart}/>
      <IntervalList intervalData={intervalData}/>
    </div>
  );
}

export default App;
