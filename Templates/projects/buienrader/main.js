//variables
const BASE_URL="https://api.weatherapi.com/v1/current.json?key=f68fb36a91bf4cb49af104810210206&q=Amsterdam&aqi=no";

const locationInput=document.querySelector(".city-input");
const searchBtn=document.querySelector(".search-button");
const cityName=document.querySelector(".city-name");
const region=document.querySelector(".region");
const country=document.querySelector(".country");
const currentTime=document.querySelector(".local-time");
const temprature=document.querySelector(".temprature");
const condition=document.querySelector(".condition");
const conditionIcon=document.querySelector(".condition-icon");


getData();
specificSearch();

async function getData(){
    const promise=await fetch(BASE_URL);
    let fetchedData=await promise.json();
    console.log(fetchedData)
    firstLoading();
    function firstLoading(){
        cityName.textContent=fetchedData.location.name;
        region.textContent=fetchedData.location.region;
        country.textContent=fetchedData.location.country;
        currentTime.textContent=fetchedData.location.localtime;
        temprature.textContent=fetchedData.current.temp_c;
        temprature.classList.add("temp");
        condition.textContent=fetchedData.current.condition.text;
        conditionIcon.src=fetchedData.current.condition.icon;
    }
}
function specificSearch(){
    searchBtn.addEventListener('click',async()=>{
        const promise=await fetch("https://api.weatherapi.com/v1/current.json?key=f68fb36a91bf4cb49af104810210206&q="+locationInput.value+"&aqi=no");
        const fetchedData=await promise.json();
        cityName.textContent=fetchedData.location.name;
        region.textContent=fetchedData.location.region;
        country.textContent=fetchedData.location.country;
        currentTime.textContent=fetchedData.location.localtime;
        temprature.textContent=fetchedData.current.temp_c;
        temprature.classList.add("temp");
        condition.textContent=fetchedData.current.condition.text;
        conditionIcon.src=fetchedData.current.condition.icon;
    })
    

}





