import React from "react";



function Analysis ({intervalData, categoryArray}){

    let lastWeekArray=[];

     function dbDateExtractor(){
        let numWeeks = 1;
        let now = new Date();
        now.setDate(now.getDate() - numWeeks * 7);
        console.log(now);
        let lastWeek = Date.parse(now);
        console.log('last week', lastWeek);
        //---ms in a week = 604800000 --- today = 1660169736000

        for(let index of intervalData){
            let day = index.date.day;
            let month = index.date.month;
            let year = index.date.year;
            console.log('in for loop', Date.parse(year-month-day));
            let todaysDateMs=Date.parse(new Date());
            let indexDateMs=Date.parse(`${year}-${month}-${day}`);
            console.log('the math', todaysDateMs-indexDateMs)
            if(indexDateMs>lastWeek){
                    lastWeekArray.push(index.id)
            }
        }        
     }


     dbDateExtractor()

//--------------Turn the duration into a string--------
    function parseDurationString (index1){
        let hoursReduceArray = [];
        let minutesReduceArray = [];
        let splitVersion=index1.map(index=>index.split(':'));
        splitVersion.map((index)=>{hoursReduceArray.push(parseInt(index[0]))});
        let reduceHours = hoursReduceArray.reduce((a,b)=>a+b);
        splitVersion.map((index)=>minutesReduceArray.push(parseInt(index[1])));
        let reduceMinutes = minutesReduceArray.reduce((a,b)=>a+b);
        let division = reduceMinutes/60;
        let remainder = reduceMinutes%60;
        return(`${reduceHours+Math.floor(division)}:${remainder}`);

    }


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

                    analysisObject[interval.category].total=parseDurationString(analysisObject[interval.category]);
                }
            }
        };
    }

    //-------------add total time per category--------------

    createAnalysisObject()
    console.log(lastWeekArray)
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
        {lastWeekArray.map(index=>{
            return(
                <p>{index}</p>
            )
        })}
        </div>
    )
}

export default Analysis;