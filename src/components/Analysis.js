import React from "react";



function Analysis ({intervalData, categoryArray}){
    
   
    let analysisObject = {};

   

        for (let interval of intervalData){
            for (let category of categoryArray){
                if (interval.category===category.name){
                    if (analysisObject[interval.category]===undefined)
                    {analysisObject[interval.category]=[]; console.log('initialize: '+ interval.category)}
                    if (analysisObject[interval.category].length<1){
                        analysisObject[interval.category]=[interval.duration];
                        console.log('logged initial', interval.category, " ", interval.duration);

                    }
                    else analysisObject[interval.category].push(interval.duration);
                    console.log(analysisObject[interval.category])
                }
            }
        };
    return (
        <div className="container">
        {categoryArray.map((index)=>{
            return (<p key={index.id}>{index.name}{analysisObject[index.name]}</p>)
        })}
        </div>
    )
}

export default Analysis;