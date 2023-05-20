import React, {useState} from "react";


function Settings ({handleAddCategory, handleDeleteCategory, newCategory, setNewCategory, categoryArray}){



    const [categoryForDelete, setCategoryForDelete]=useState(null)

    function handleNewCatChange(e){
     setNewCategory(e.target.value);
    }


    function handleClick (){
        handleAddCategory(newCategory)
    }

    function handleTargetForDelete(e){
       setCategoryForDelete(e.target.value)
    }

    function handleDeleteClick (e){
        let idSearch = categoryArray.find((index)=>index.name===categoryForDelete)
            handleDeleteCategory(idSearch.id);
            e.target.previousElementSibling.value="default";

    }



    return(
        <div className="container">
            <div>
            <input onChange={handleNewCatChange} type="text" placeholder="new catergory name" ></input>
           <button onClick={handleClick} >add category</button>
           <select onChange={handleTargetForDelete}>
            <option value="default">select category</option>
            {categoryArray.map(index=><option>{index.name}</option>)}
           </select>
           <button onClick={handleDeleteClick}>delete</button>
            </div>
            <div>
                <h4>Category List</h4>
            {categoryArray.map(index=><h5>{index.name}</h5>)}
            </div>
           
        </div>
    )
}


export default Settings