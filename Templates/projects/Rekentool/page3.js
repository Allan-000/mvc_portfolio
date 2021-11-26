const celToFahrInput=document.querySelector(".cel-to-fehr-input");
const calculateButton=document.querySelector(".cel-to-fahrenheit-calculate-button");
const celInputLastLine=document.querySelector(".cel-input");
const celToFahrResult=document.querySelector(".cel-to-fehr-result");
const mainButton=document.querySelector(".backward-button");
calculateButton.addEventListener("click",()=>{
    const cel =celToFahrInput.value*9/5;
    celToFahrResult.textContent=cel+(32);
    celInputLastLine.textContent=celToFahrInput.value;
})
mainButton.addEventListener("click",()=>{
    window.history.back();
})