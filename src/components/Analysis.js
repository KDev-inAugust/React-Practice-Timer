import React, {useState} from "react";



function Analysis ({intervalData, categoryArray}){
    
   const [timeSummary, setTimeSummary]=useState("")
    let analysisObject = {};
    let totalsList=[];

   //-------------create arrays of time entries-----------
    function createAnalysisObject(){
        for (let interval of intervalData){
            for (let category of categoryArray){
                if (interval.category===category.name){
                    if (analysisObject[interval.category]===undefined)
                    {analysisObject[interval.category]=[];}
                    if (analysisObject[interval.category].length<1){
                        analysisObject[interval.category]=[interval.duration];
                    }
                    else analysisObject[interval.category].push(interval.duration);

                    analysisObject[interval.category].total=analysisObject[interval.category].reduce((a,b)=>{
                        return `${parseInt(a[0])+parseInt(b[0])} : ${parseInt(a.slice(3,5))+parseInt(b.slice(3,5))}`});
                        totalsList.push(`${interval.category}`, analysisObject[interval.category].total)
                }
            }
        };
    }

    //-------------add total time per category--------------

    //---------formula for time output--------------
    let arr1=['4: 10', '1: 48'];
    let arr2 = arr1.reduce((a,b)=>{
        return `${parseInt(a[0])+parseInt(b[0])} " " ${parseInt(a.slice(3,5))+parseInt(b.slice(3,5))}`})
        //--------------------------------------------------

    createAnalysisObject()

    return (
        <div className="container">
        {
            Object.keys(analysisObject).map((key, index)=>{
                return (
                    <div key={index}>
                        <h2>{key}: {analysisObject[key].total}</h2>
                        <hr />
                        </div>
                )
            })
        }
        </div>
    )
}

export default Analysis;