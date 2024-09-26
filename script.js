console.log("Welcome To Tic Tac Toe");
let gamoveraudio = new Audio("gameover.mp3");
let turnaudio = new Audio("ting.mp3");
let musicr = new Audio("music.mp3");
let turn = "X";
let gameover=false;

const changeTurn = () => {

    return turn === "X" ? "O" : "X";
}
const checkwin = () => {
    let wins=[
        [0 ,1, 2],
        [3 ,4, 5],
        [6 ,7, 8],
        [1 ,4, 7],
        [2 ,5, 8],
        [0 ,4, 8],
        [2 ,4, 6],
     
    ]
    let boxtext =document.querySelectorAll(".boxtext");
   
    wins.forEach(e =>{
     
        if((boxtext[e[0]].innerText===boxtext[e[1]].innerText) && (boxtext[e[2]].innerText===boxtext[e[1]].innerText)&&(boxtext[e[0]].innerText!=='') )
       {
         document.getElementsByClassName("info")[0].innerText =boxtext[e[0]].innerText +" Won!";
         gameover=true;
         game=0;
         document.getElementById('img1').style.width='200px';

       }
       if(count==9)
        {
            document.getElementsByClassName("info")[0].innerText ="Game Draw!";
        }

    })

}
// Reset Button
let rest=document.getElementById("reset");
rest.addEventListener("click",()=>{
    let boxtext =document.querySelectorAll(".boxtext");
    Array.from(boxtext).forEach(e=>{
        e.innerText='';
    })
    document.getElementById('img1').style.width='0px';
    turn='X';
    gameover=false;
    console.log("Reset Successful!");
})
let count=0;


//Game Logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext =element.querySelector(".boxtext");
   
    element.addEventListener("click", () => {
        if (boxtext.innerText ==='') {
            boxtext.innerText=turn;
            turn=changeTurn();
            turnaudio.play();
            checkwin();
           count=count+1;
            if(!gameover)
           document.getElementsByClassName("info")[0].innerText ="Turn for  "+turn;
     
        }
      
    })
})
