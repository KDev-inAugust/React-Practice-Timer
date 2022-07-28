import React from "react";


function Settings ({handleAddCategory, newCategory, setNewCategory, categoryArray}){

    function handleNewCatChange(e){
     setNewCategory(e.target.value);
    }


    function handleClick (){
        handleAddCategory(newCategory)
    }


    return(
        <div className="container">
            <div>
            <input onChange={handleNewCatChange} type="text" placeholder="new catergory name" ></input>
           <button onClick={handleClick} >add category</button>
            </div>
            <div>
                <h4>Category List</h4>
            {categoryArray.map(index=><h5>{index.name}</h5>)}
            </div>
           
        </div>
    )
}


export default Settings