import React from "react";

function Timer ({minutes, seconds, month, day, year, intervalStart})

{
    return(
        <div id="timer">
            <div className="clock" >{`${minutes}:${seconds}`}</div>
  <br/> 
 {`on:  ${month}/ ${day}/ ${year} at:${intervalStart}`}
        </div>
    )
}

export default Timer