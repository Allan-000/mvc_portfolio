//the elements of kmNaarMile.html
const select=document.querySelector(".select");
const kmToMileInput=document.querySelector(".km-to-mile-input");
const kmToMileCalculateButton=document.querySelector(".km-to-mile-calculate-button");
const kmToMileOutput=document.querySelector(".km-to-mile-result");
const kmInputLastLine=document.querySelector(".km-input");
const mainBackButton=document.querySelector(".backward-button");
kmToMileCalculateButton.addEventListener("click",()=>{
    kmToMileOutput.textContent= kmToMileInput.value*0.60;
    kmInputLastLine.textContent=kmToMileInput.value;
})
mainBackButton.addEventListener("click",()=>{
    window.history.back();
})