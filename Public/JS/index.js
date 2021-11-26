let themeableTexts =document.querySelectorAll(".themeable-text");
let themeSwitcherBtn=document.querySelector(".theme-toggler");
let bodyBackground=document.querySelector("body");
let hrs=document.querySelectorAll("hr");
themeSwitcherBtn.addEventListener("click",()=>{
    bodyBackground.classList.toggle("themed-body");
    for(let i = 0; i<themeableTexts.length ; i++){
        themeableTexts[i].classList.toggle("themed-text");
    }
    for(let y=0 ; y<hrs.length ; y++){
        hrs[y].classList.toggle("themed-hr");
    }
})
console.log(hrs)
