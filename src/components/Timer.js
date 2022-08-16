import React from "react";
import Image from '../circleBorder.png';

function Timer ({minutes, seconds, month, day, year, intervalStart})

{
    return(
        <div>
            <div id="timer">
                <div className="clock" >
                    <div id="clockNumbers">{`${minutes}:${seconds}`}</div>
            </div>
        </div>
         <br/> 
        {`on:  ${month}/ ${day}/ ${year} at:${intervalStart}`}
        
        </div>
    )
}

export default Timer