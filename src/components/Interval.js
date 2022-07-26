import React , {useState} from "react";



function Interval ({
    id, 
    name, 
    duration, 
    category, 
    day, 
    month, 
    year, 
    notes, 
    details, 
    setDetails, 
    postDetails,
    deleteAnInterval}){

    const [showDetails, setShowDetails] = useState(false)
    
    const [editState, setEditState] = useState(false);

    function handleDetailsClick(){
        setShowDetails(!showDetails)
    }

    function handleEditClick(){
        setEditState(!editState)
    }
  
    function handleDetailsInputChange(e){
        setDetails(e.target.value)
    }

    function setDescriptionChanges(){
        setEditState(!editState);
        postDetails(id);
        console.log(id)
    }

    function handleDeleteInterval(){
       if (window.confirm('are you sure you want to delete this interval?')===true){
        deleteAnInterval(id)
        console.log('id',id);
        setShowDetails(false)
       }
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
                <hr></hr>
                <h4>notes:</h4>
                 <p>{notes}</p>
                <button onClick={handleDetailsClick}>hide details</button>
                <br></br>
                <textarea onChange={handleDetailsInputChange}></textarea>
                <br></br>
                <button onClick={setDescriptionChanges}>set changes</button>
                <br></br>
                <button onClick={handleEditClick} >cancel changes</button>
                <br></br>
                <button onClick={handleDeleteInterval} >delete this interval</button>
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
                <hr></hr>
                <h4>notes:</h4>
                <p>{notes}</p>
                <button onClick={handleDetailsClick}>hide details</button>
                <button onClick={handleEditClick} >edit</button>
                </li>
            </ul> 
        </div>
    )

}

export default Interval;