import React from "react";



function Interval ({name, duration, category}){
    return(
        <div>
            <ul>
                <li className="interval">
                {`${name} ${duration} ${category}`} 
                <br></br>
                <button>edit</button>
                </li>
            </ul>
            
        </div>
    )
}

export default Interval;