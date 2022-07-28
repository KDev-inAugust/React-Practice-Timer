import React from "react";
import Interval from "./Interval";

function IntervalList ({intervalData}){



    return(
        <div className="container">
            
            <div >
            {intervalData.length===0 ? 'Loading': `Log Begin ${intervalData[0].date.day}/ ${intervalData[0].date.month}`}
            {intervalData.map((index, cur)=>{
            if (cur>0){cur=cur-1}
            
             return(
            <div>
                
            <div key={index.name}>{intervalData[cur].date.day===index.date.day? null : `${index.date.day}/ ${index.date.month}`}</div>
            <Interval key={index.id} name={index.name} duration={index.duration} category={index.category}/>
            </div>
            )})}
            
            </div>
        </div>
    )
}

export default IntervalList;



