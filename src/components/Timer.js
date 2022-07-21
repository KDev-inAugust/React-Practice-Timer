import React from "react";

function Timer ({minutes, seconds, month, day, year, intervalStart})
{
    return(
        <div>
 {`${minutes}:${seconds} on:  ${month}/ ${day}/ ${year} at:${intervalStart}`}
        </div>
    )
}

export default Timer