import React , {useState} from "react";



function Interval ({name, duration, category, day, month, year}){

    const [showDetails, setShowDetails] = useState(false)
    const [details, setDetails] = useState("")
    const [editState, setEditState] = useState(false);

    function handleDetailsClick(){
        setShowDetails(!showDetails)
    }

    function handleEditClick(){
        setEditState(!editState)
    }

    //-------------make sure this makes it all the way to the API-----
    function handleDetailsInputChange(e){
        setDetails(e.target.value)
    }

    function setDescriptionChanges(){
        setEditState(!editState)

    }


    if (showDetails===false){
    return(
        <div>
            <ul>
                <li className="interval">
                {`${name} ${duration} ${category}`}
                <br></br>
                <button onClick={handleDetailsClick}>show details</button>
                </li>
            </ul>
        </div>
    )
    }
    else if (showDetails===false&&editState===false) return (
        <div>
            <ul>
                <li className="interval">
                {`${name} ${duration} ${category}`}
                <br></br>
                {`loggged on: ${day}/${month}/${year}`}
                <br></br>
                <p>{details}</p>
                <button onClick={handleDetailsClick}>hide details</button>
                <button onClick={handleEditClick} >edit</button>
                </li>
            </ul> 
        </div>
    )

    else if (showDetails===true &&editState===true) return (
        <div>
            <ul>
                <li className="interval">
                {`${name} ${duration} ${category}`}
                <br></br>
                {`loggged on: ${day}/${month}/${year}`}
                <br></br>
                <p>{details}</p>
                <button onClick={handleDetailsClick}>hide details</button>
                <button onClick={setDescriptionChanges}>set changes</button>
                <input onChange={handleDetailsInputChange} type='text'></input>
                </li>
            </ul> 
        </div>
    )

    else return (
        <div>
            <ul>
                <li className="interval">
                {`${name} ${duration} ${category}`}
                <br></br>
                {`loggged on: ${day}/${month}/${year}`}
                <br></br>
                <p>{details}</p>
                <button onClick={handleDetailsClick}>hide details</button>
                <button onClick={handleEditClick} >edit</button>
                </li>
            </ul> 
        </div>
    )


     
     ;

    


}

export default Interval;