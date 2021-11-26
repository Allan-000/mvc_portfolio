import Player from "./Player.js";

const playerNameinput=document.querySelector(".player-name-input");
const addPlayer=document.querySelector(".add-player");
//player 1
const firstPlayerDisplayedName=document.querySelector(".player1-name");
const firstPlayerDisplayedPoints=document.querySelector(".player1-points");
let firstPlayerPoints=0;
//player 2
const secondPlayerDisplayedName=document.querySelector(".player2-name");
const secondPlayerDisplayedPoints=document.querySelector(".player2-points");
let secondPlayerPoints=0;
const players=[];
const board=document.querySelector(".playing-board");
const fields=document.querySelectorAll(".playing-board div");
const restartButton=document.querySelector(".restart-button");
const resetFieldsBtn=document.querySelector(".reset-fields");


const winLines = [
    [fields[0],fields[1],fields[2]],
    [fields[0],fields[3],fields[6]],
    [fields[0],fields[4],fields[8]],
    [fields[2],fields[4],fields[6]],
    [fields[6],fields[7],fields[8]],
    [fields[2],fields[5],fields[8]],
    [fields[1],fields[4],fields[7]],
    [fields[3],fields[4],fields[5]],
];
//running the functions


//creating and adding players 
addPlayer.addEventListener('click',()=>{
    if(players.length<2){
        if(playerNameinput.value===""){
            alert("Please enter the players names to begin.")
        }
        else{
            const player1=new Player();
            player1.name=playerNameinput.value;
            player1.points=0;
            
            players.push(player1);
            playerNameinput.value="";
            
            const player2=new Player();
            player2.name=playerNameinput.value;
            player2.points=0;
            console.log(players)
            firstPlayerDisplayedName.textContent=players[0].name;
            try{
                secondPlayerDisplayedName.textContent=players[1].name;
            }
            catch{
                console.log("Players being created")
            }
        }
    }
    else{
        alert("There are already two players.")
    }
})
//adding X and O to the board
let turnTrack=true;


board.addEventListener('click',function(e){
    if(players[0]==undefined||players[1]==undefined){
        alert("You can not start the game without players \n Please add players")
    }
    else{
        const selectedField=e.target;
        if(turnTrack){
            if(selectedField.classList.contains("x-selection")||
            selectedField.classList.contains("o-selection")){
                alert("This feild is already choosen, select another one.")
            }
            else{
                selectedField.classList.add("x-selection");
                turnTrack=false;
            }
            
        }
        else if(turnTrack==false){
            if(selectedField.classList.contains("x-selection")||
            selectedField.classList.contains("o-selection")){
                alert("This feild is already choosen, select another one.")
            }
            else{
                selectedField.classList.add("o-selection");
                turnTrack=true;
            }
        }
        winCheck();

    }
})
function winCheck(){
    for(let i=0;i<winLines.length; i++){
        let winLine=winLines[i];
        if(winLine[0].classList.contains("x-selection")&&winLine[1].classList.contains("x-selection")&&winLine[2].classList.contains("x-selection")){
            alert(players[0].name+" won")
            firstPlayerPoints++;
            firstPlayerDisplayedPoints.textContent=firstPlayerPoints;
            resetFields();
        }
        else if(winLine[0].classList.contains("o-selection")&&winLine[1].classList.contains("o-selection")&&winLine[2].classList.contains("o-selection")){
            alert(players[1].name+" won")
            secondPlayerPoints++
            secondPlayerDisplayedPoints.textContent=secondPlayerPoints;
            resetFields();
        }
    }
}

resetFieldsBtn.addEventListener('click',()=>{
    for(let i=0;i<fields.length; i++){
        fields[i].classList.remove("o-selection");
        fields[i].classList.remove("x-selection");
    }
});

function resetFields(){
    for(let i=0;i<fields.length; i++){
        fields[i].classList.remove("o-selection");
        fields[i].classList.remove("x-selection");
    }
}


restartButton.addEventListener('click',()=>{
    location.reload();
})


