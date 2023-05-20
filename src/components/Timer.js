import React from "react";
import Image from '../circleBorder.png';

function Timer ({minutes, seconds, month, day, year, intervalStart})

{
    return(
        <div>
            <div id="timer">
            <h2>current interval</h2>
                <div className="clock" >
                    <div id="clockNumbers">{`${minutes}:${seconds}`}</div>
                </div>
        </div>

        <div id="session-timestamp">
        {`on:  ${month}/ ${day}/ ${year} at:${intervalStart}`}
        </div>
        
        </div>
    )
}

export default Timer