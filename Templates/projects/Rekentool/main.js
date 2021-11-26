//The elements of index.html
const select=document.querySelector(".select");
const kmToMile=document.querySelector(".kmNaarMile");
const celToFahr=document.querySelector(".celNaaFahr");
const yearToDay=document.querySelector(".JaarNaarUur");
const goButton=document.querySelector(".go-bottun");
//options urls
goButton.addEventListener("click",()=>{
    if(select.value==kmToMile.value){
        window.location=kmToMile.value;
    }
    else if(select.value==celToFahr.value){
        window.location=celToFahr.value;
    }
    else if(select.value==yearToDay.value){
        window.location=yearToDay.value;
    }
    else{
        return false;
    }
})
