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
    }

    function handleDeleteInterval(){
       if (window.confirm('are you sure you want to delete this interval?')===true){
        deleteAnInterval(id);
        setShowDetails(false);
       }
    }


    if (showDetails===false){
    return(
        <div className="interval">
                <b>{name}</b>
                <br></br>
                <b>duration: </b>{duration}
                <br></br>
                <b>category: </b>{category}
                <br></br>
                <button onClick={handleDetailsClick}>show details</button>
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
        <div className="interval">
                {`${name} ${duration} ${category}`}
                <br></br>
                {`loggged on: ${day}/${month}/${year}`}
                <hr></hr>
                <h4>notes:</h4>
                 <p id="notes">{notes}</p>
                 <br></br>
                <button onClick={handleDetailsClick}>hide details</button>
                <br></br>
                <textarea onChange={handleDetailsInputChange}></textarea>
                <br></br>
                <button onClick={setDescriptionChanges}>set changes</button>
                <button onClick={handleEditClick} >cancel changes</button>
                <button onClick={handleDeleteInterval} >delete this interval</button>
        </div>
    )

    else return (
        <div className="interval">
                {`${name} ${duration} ${category}`}
                <br></br>
                {`loggged on: ${day}/${month}/${year}`}
                <hr></hr>
                <h4>notes:</h4>
                <p>{notes}</p>
                <button onClick={handleDetailsClick}>hide details</button>
                <button onClick={handleEditClick} >edit</button>
        </div>
    )

}

export default Interval;