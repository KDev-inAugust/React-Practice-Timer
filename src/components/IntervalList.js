import React from "react";
import Interval from "./Interval";

function IntervalList ({intervalData}){

    return(
        <div className="container">
        <div >{intervalData.map((index)=>{return(
            <Interval key={index.id} name={index.name} duration={index.duration} category={index.category}/>
        )})}</div>
        </div>
    )
}

export default IntervalList;