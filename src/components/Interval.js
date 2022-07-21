import React from "react";



function Interval ({name, duration, category}){
    return(
        <div>
            {`${name} ${duration} ${category}`} 
        </div>
    )
}

export default Interval;