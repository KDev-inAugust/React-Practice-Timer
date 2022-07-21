import React from "react";
import Interval from "./Interval";

function IntervalList ({intervalData}){

    return(
        <div>{intervalData.map((index)=>{return(
            <Interval key={index.id} name={index.name} duration={index.duration} category={index.category}/>
        )})}</div>
    )
}

export default IntervalList;