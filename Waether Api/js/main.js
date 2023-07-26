async function countrySearch(a){

let p=await fetch(`https://api.weatherapi.com/v1/forecast.json?key=7d77b96c972b4d119a3151101212704&q=${a}&days=3`);

if(p.ok&&400!=p.status)
{let a=await p.json();

    displayCurrentDay(a.location,a.current),
    displayNextDays(a.forecast.forecastday)
}
}
 document.getElementById("search").addEventListener("keyup",a=>{countrySearch(a.target.value)});

  var daysOfWeek=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

  const month_names=["January","February","March","April","May","June","July","August","September","October","November","December"];

function displayCurrentDay(a,t){
    if(null!=t) {
     var e=new Date(t.last_updated.replace(" ","T"));
        let toDay=`<div class="today forecast "> 
         <div class="forecast-header w-100"  id="today"> 
         <div class="day">${daysOfWeek[e.getDay()]}</div> 
         <div class=" date">${e.getDate()+month_names[e.getMonth()]}</div>
         </div> 
         <div class="forecast-content" id="current">
         <div class="location">${a.name}</div>
         <div class="degree">  
         <div class="num">${t.temp_c}<sup class="sup1">o</sup>C</div>    
         <div class="forecast-icon">
         <img src="https:${t.condition.icon}" alt="" width=90> 
         </div></div> 
         <div class="custom">${t.condition.text}</div> 
         <span><img src="./img/icon-umberella.png" alt=""> 20%</span>
         <span> <img src="./img/icon-wind.png" alt=""> 18km/h</span>
         <span> <img src="./img/icon-compass.png" alt=""> East</span> </div></div>`;
     document.getElementById("forecast").innerHTML=toDay}}
function displayNextDays(a){
        let temp="";
         for(let i=1;i<a.length;i++)
          temp+=`<div class="forecast ">
               <div class="forecast-header w-100">
               <div class="day">${daysOfWeek[new Date(a[i].date.replace(" ","T")).getDay()]}</div>
               </div>       
               <div class="forecast-content"> 
               <div class="forecast-icon">               
               <img src="https:${a[i].day.condition.icon}" alt="" width=48>           
               </div>           
               <div class="degree">${a[i].day.maxtemp_c}<sup>o</sup>C</div>
               <small>${a[i].day.mintemp_c}<sup>o</sup></small>           
               <div class="custom">${a[i].day.condition.text}</div>
               </div>       
               </div>`;
        document.getElementById("forecast").innerHTML+=temp}

        countrySearch("cairo");