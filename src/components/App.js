import { clear } from '@testing-library/user-event/dist/clear';
import React, {useState, useEffect} from 'react';
import { Route, Switch } from "react-router-dom";
import { render } from 'react-dom';
import '../App.css';
import NavBar from './NavBar';
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
  const [newCategory, setNewCategory]=useState("")
  const [categoryArray, setCategoryArray]=useState([]);
  const [details, setDetails] = useState("")
  
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
//---------get categories-----------------
useEffect(()=>{
  fetch("http://localhost:3000/categories")
  .then(res=>res.json())
  .then(data=>setCategoryArray(data));
},[])


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

  
//---------------add a new category----------------
  function handleAddCategory(newCategory){
    fetch("http://localhost:3000/categories",{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: newCategory
      })
    }
    ).then(res=>res.json())
    .then(data=>{setCategoryArray([...categoryArray, data])})
  }

  //-------------remove a category----------------

  function handleDeleteCategory(id){
    fetch(`http://localhost:3000/categories/${id}`,{
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
      ).then(res=>res.json())
      .then(data=>console.log(data));

      fetch("http://localhost:3000/categories")
  .then(res=>res.json())
  .then(data=>setCategoryArray(data));
  }
  

  //---------------post details from interval module------
  function postDetails (id){
      console.log(details);
      fetch(`http://localhost:3000/intervals/${id}`,{
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          details: details
        })
      }
      ).then(res=>res.json())
      .then(data=>setLastPost(data))
  }

  return (
    <div className="App">
      <h1>Practice Timer</h1>
      <h2>current interval</h2>
      <br></br>
      <Timer minutes={minutes} seconds={seconds} month={month} day={day} year={year} intervalStart={intervalStart}/>
      <IntervalDataInput setIntervalName={setIntervalName} setIntervalType={setIntervalType} handleLogSession={handleLogSession} categoryArray={categoryArray}/>
      <br></br>
      <Transport pause={pause} setPause={setPause} setMinutes={setMinutes} setSeconds={setSeconds} setIntervalStart={setIntervalStart}/>
      <NavBar />
        <Switch>
          <Route path="/intervalList">
            <IntervalList intervalData={intervalData} details={details} setDetails={setDetails} postDetails={postDetails}/>
          </Route>
          <Route path="/settings">
            <Settings 
            handleAddCategory={handleAddCategory} 
            newCategory={newCategory} 
            setNewCategory={setNewCategory} 
            categoryArray={categoryArray} 
            handleDeleteCategory={handleDeleteCategory}/>
          </Route>
        </Switch>
      
      
    </div>
  );
}

export default App;
