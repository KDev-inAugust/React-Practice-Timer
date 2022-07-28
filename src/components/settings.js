import React from "react";


function Settings ({handleAddCategory, newCategory, setNewCategory}){

    function handleNewCatChange(e){
     setNewCategory(e.target.value);
    }


    function handleClick (){
        handleAddCategory(newCategory)
    }


    return(
        <div className="container">
           <input onChange={handleNewCatChange} type="text" placeholder="new catergory name" ></input>
           <button onClick={handleClick} >add category</button>
        </div>
    )
}


export default Settings