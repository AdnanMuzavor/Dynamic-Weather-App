// const {json} = require("express");

const serach=document.getElementById("submitBtn");
const cityentered=document.getElementById("cityNmae");
const cityoutput=document.getElementById("city");
const temp_status=document.getElementById("temp_status");
const temp=document.getElementById("temp");
const day=document.getElementById("day");
const today_data=document.getElementById("today_data");
const mainoutput=document.querySelector(".middle_layer");

const Srch=async (event)=>{
    // alert("Search clicked");
    let cityval=cityentered.value;
    event.preventDefault();
    console.log(cityval);
    if(cityval===""){
        cityoutput.innerText="Plz write the name before searching";
        mainoutput.classList.add("data_hide");
    }
    else{
        url=`https://api.openweathermap.org/data/2.5/weather?q=${cityval}&units=metric&appid=33df27d885e21deac4494a5a43b5437f`;
        try{
            const response=await fetch(url);
            const data=await response.json();
            const dataArr=[data];
            console.log(dataArr);
            temp.innerHTML=`${dataArr[0].main.temp}<sup>o</sup>C`;
            // temp_status.innerText=dataArr[0].weather[0].main;
            const status=dataArr[0].weather[0].main;
            if(status==="Clear"){
            temp_status.innerHTML="<i class='fas fa-sun' style='color:#eccc68;'></i>";
            }
            else if(status==="Clouds"){
                temp_status.innerHTML="<i class='fas fa-cloud' style='color:#f1f2f6;'></i>";
                }
            else if(status==="Rain"){
                    temp_status.innerHTML="<i class='fas fa-cloud-rain ' style='color:#a4b0be;'></i>";
                    }   
            else{
                temp_status.innerHTML="<i class='fas fa-sun' style='color:#eccc68;'></i>";
            }        
            const city=dataArr[0].name;
            const country=dataArr[0].sys.country;
            cityoutput.innerText=`${city}|${country}`;
        }catch(err){
            mainoutput.classList.add("data_hide");
            
            cityoutput.innerText="Plz enter the city name properly."; 
            console.log(err);
        }
        mainoutput.classList.remove("data_hide");
        temp.style.display="block";
        temp_status.style.display="block";
    }
}
serach.addEventListener("click",Srch);



const setter=()=>{
const today=new Date();

//Get date
const date=today.getDate();

//Getting week
var weekdays=new Array(7);
weekdays[0]="Sun";
weekdays[1]="Mon";
weekdays[2]="Tue";
weekdays[3]="Wed";
weekdays[4]="Thur";
weekdays[5]="Fri";  
weekdays[6]="Satr";
weekday=weekdays[today.getDay()];
day.innerText=weekday;

//Getting Month
var Months=Array(12);
Months[0]="Jan";
Months[1]="Feb";
Months[2]="March";
Months[3]="April";
Months[4]="May";
Months[5]="June";
Months[6]="July";
Months[7]="August";
Months[8]="Sep";
Months[9]="Oct";
Months[10]="Nov";
Months[11]="Dec";
var month=Months[today.getMonth()];

var set=`${date} ${month}`;
today_data.innerText=set;
}
setter();