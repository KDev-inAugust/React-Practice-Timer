import { clear } from '@testing-library/user-event/dist/clear';
import React, {useState, useEffect} from 'react';
import { render } from 'react-dom';
import '../App.css';
import IntervalDataInput from './IntervalDataInput';
import IntervalList from './IntervalList';
import Transport from './Transport';
import Settings from './settings';
import Timer from './Timer';




function App() {

  const [intervalData, setIntervalData] =useState([])
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [pause, setPause] = useState(true);
  const [intervalStart, setIntervalStart] = useState(new Date().toLocaleTimeString());
  const [intervalName, setIntervalName]=useState("");
  const [intervalType, setIntervalType] = useState("");
  const [lastPost, setLastPost]=useState([])
  
useEffect(()=>{
  fetch("http://localhost:3000/intervals")
  .then(res=>res.json())
  .then(data=>setIntervalData(data));
},[lastPost])

//--------timer base functionality--------
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

  //---------time stamp info-----------
    let day = new Date().getDate()
    let month = new Date().getMonth();
    let year = new Date().getFullYear();

  //---------log interval on click--------
    
  function handleLogSession (){
    fetch("http://localhost:3000/intervals",{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: intervalName,
        duration: `${minutes}: ${seconds}`,
        category: `${intervalType}`,
        date: {
          day:`${day}`,
          month: `${month}`,
          year: `${year}`
      }
      })
    }
    ).then(res=>res.json())
    .then(data=>{setIntervalData([...intervalData], data); setLastPost(data)})
  }


  return (
    <div className="App">
      <h1>Practice Timer</h1>
      <h2>current interval</h2>
      <br></br>
      <Timer minutes={minutes} seconds={seconds} month={month} day={day} year={year} intervalStart={intervalStart}/>
      <IntervalDataInput setIntervalName={setIntervalName} setIntervalType={setIntervalType} handleLogSession={handleLogSession}/>
      <br></br>
      <Transport pause={pause} setPause={setPause} setMinutes={setMinutes} setSeconds={setSeconds} setIntervalStart={setIntervalStart}/>
      <IntervalList intervalData={intervalData}/>
      <Settings />
    </div>
  );
}

export default App;
