const ageInput=document.querySelector(".age-year-input");
const ageCalculatebutton=document.querySelector(".age-calculate-button");
const ageInDays=document.querySelector(".age-in-days");
const mainButton=document.querySelector(".backward-button");
ageCalculatebutton.addEventListener("click",()=>{
    ageInDays.textContent=ageInput.value*365;
})
mainButton.addEventListener("click",()=>{
    window.history.back();
})