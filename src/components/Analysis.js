import React , {useState} from "react";



function Analysis ({intervalData, categoryArray}){

    const [weekAmountArray, setWeekAmountArray]=useState([1,2,3,4])
    const [selectedAmount, setSelectedAmount]=useState(3)


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



   //-------------create arrays of time entries-----------

   let analysisObject = {};

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
    createAnalysisObject()
    
//----------find the totals for last week only-----------
let lastWeekArray=[];

function dbDateExtractor(){
   let numWeeks = selectedAmount;
   let now = new Date();
   now.setDate(now.getDate() - numWeeks * 7);
   let lastWeek = Date.parse(now);

   for(let index of intervalData){
       let day = index.date.day;
       let month = index.date.month;
       let year = index.date.year;
       let indexDateMs=Date.parse(`${year}-${month}-${day}`);
       if(indexDateMs>lastWeek){
               lastWeekArray.push(index.id)
       }
   }        
}

dbDateExtractor()

let lastWeeksObjects = [];
for (let interval of intervalData) {
   for(let element of lastWeekArray){
       if (interval.id===element){
      lastWeeksObjects.push(interval);
       }}}

//--------------create last week analysis object--------------

let lastWeekAnalysisObject = {};

    function createLastWeekAnalysisObject(){
        for (let interval of lastWeeksObjects){
            for (let category of categoryArray){
                if (interval.category===category.name){
                    if (lastWeekAnalysisObject[interval.category]===undefined)
                    {lastWeekAnalysisObject[interval.category]=[];}
                    if (lastWeekAnalysisObject[interval.category].length<1){
                        lastWeekAnalysisObject[interval.category]=[interval.duration];
                    }
                    else lastWeekAnalysisObject[interval.category].push(interval.duration);

                    lastWeekAnalysisObject[interval.category].total=parseDurationString(lastWeekAnalysisObject[interval.category]);
                }
            }
        };
    }
    createLastWeekAnalysisObject();
//-------------on change function for selecting the amount of weeks

function handleWeeksChange(e){
    setSelectedAmount(e.target.value)
}

//-------------add total time per category--------------
    
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
                {/* --------add totals for selected week range----------------- */}
            <div>
                <h1>{"Last "}
                <select className="weekAmount" onChange={handleWeeksChange}>
                    {weekAmountArray.map((index)=>{
                        return (
                            <option>{index}</option>
                        )
                    })}
                 </select> Weeks
                </h1>
                <hr />
                {
                    
                     Object.keys(lastWeekAnalysisObject).map((key, index)=>{
                        return (
                            <div key={index}>
                                <h2>{key}: {lastWeekAnalysisObject[key].total}</h2>
                                <hr />
                                </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Analysis;