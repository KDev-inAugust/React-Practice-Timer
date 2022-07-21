import React from "react";


//-------create the timer-------

const [seconds, setSeconds] = useState(0);
const [start, setStart] = useState(false)

const secondCounter = useEffect(()=>{
  setInterval(timerIncrement, 1000)
  console.log('render')
},[])


function timerIncrement(){   
  setSeconds(seconds=>seconds+1)
}
