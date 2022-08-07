import React from "react";



function Analysis ({intervalData, categoryArray}){

    let testArr =["0:10","1:48","1:51","2:12","2:15","2:27"];
    let testArr2 = ["2:15"];
    

    function parseDurationString (index1){
        let hoursReduceArray = [];
        let minutesReduceArray = [];
        let splitVersion=index1.map(index=>index.split(':'));
        console.log(splitVersion);
        splitVersion.map((index)=>{hoursReduceArray.push(parseInt(index[0]))});
        console.log('hours reduce array', hoursReduceArray)
        let reduceHours = hoursReduceArray.reduce((a,b)=>a+b);
        console.log('reduce hours', reduceHours);
        splitVersion.map((index)=>minutesReduceArray.push(parseInt(index[1])));
        console.log('minutes reduce array', minutesReduceArray);
        let reduceMinutes = minutesReduceArray.reduce((a,b)=>a+b);
        console.log('reduce minutes', reduceMinutes);
        let division = reduceMinutes/60;
        let remainder = reduceMinutes%60;
        console.log('division', Math.floor(division), 'remainder', remainder);
        //return(Math.floor(division) + remainder);
        return(`${reduceHours+Math.floor(division)}:${remainder}`);

    }
    
    parseDurationString(testArr);


    let analysisObject = {};

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

                    // analysisObject[interval.category].total=analysisObject[interval.category].reduce((a,b)=>{
                    //     return `${parseInt(a[0])+parseInt(b[0])} : ${parseInt(a.slice(3,5))+parseInt(b.slice(3,5))}`
                    // });

                    analysisObject[interval.category].total=parseDurationString(analysisObject[interval.category]);
                    console.log(analysisObject[interval.category]);
                }
            }
        };
    }

    //-------------add total time per category--------------

    createAnalysisObject()
    console.log(analysisObject)
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