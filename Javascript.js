let NewGameBtn =document.querySelector(".NewGame")
let RollDiceBtn =document.querySelector(".RollDiceBtn")
let HoldBtn =document.querySelector(".HoldBtn")
let ScorePlayerOne =document.querySelector(".ScorePlayerOne")
let ScorePlayerTwo =document.querySelector(".ScorePlayerTwo")
let DiceNumber=new Array("Image/dice-1.png","Image/dice-2.png","Image/dice-3.png","Image/dice-4.png","Image/dice-5.png","Image/dice-6.png")


let ScoreP1 =0;
let ScoreP2 =0;

let CurrentScoreOne =0
let CurrentScoreTwo =0


let diceOne =1;
let diceTwo =2;
let diceThree =3;
let diceFour =4;
let diceFive=5;
let diceSix =6;


let PlayerOne = true;
let PlayerTwo= false;



function Restart() {
    PlayerOne=true;
    PlayerTwo=false;
    ScoreP1=0;
    ScoreP2=0;
    CurrentScoreOne=0;
    CurrentScoreTwo=0;
    ScorePlayerOne.textContent= ScoreP1 = 0;
    ScorePlayerTwo.textContent= ScoreP2 = 0;
    document.querySelector(".CurrentScoreOne").textContent= 0;
    document.querySelector(".CurrentScoreTwo").textContent= 0;
    document.querySelector(".Dice").style.visibility="hidden";
    ScorePlayerOne.style.Visibility="visible"
    ScorePlayerTwo.style.Visibility="visible"
    document.querySelector(".Winner").style.visibility="Hidden"
    document.querySelector(".PlayerTurn").style.Visibility="Visible"
    document.querySelector(".PlayerTurn").style.left="20px"


    
}

function SwitchPlayer(){
    if (PlayerOne) {
       

        PlayerOne=false;
        PlayerTwo=true;
        
    } else {
      
        PlayerOne=true;
        PlayerTwo=false;
        
        
    }

    if (PlayerOne){
        document.querySelector(".PlayerTurn").style.left="20px"
        document.querySelector(".PlayerTurn").textContent="P1 Turn"


    }else{
        document.querySelector(".PlayerTurn").style.left="1300px"
        document.querySelector(".PlayerTurn").textContent="P2 Turn"
    }
    
}




RollDiceBtn.addEventListener("click", ()=>{
    let Dice = Math.floor(Math.random()*DiceNumber.length);
    document.querySelector(".Dice").src=DiceNumber[Dice];
    document.querySelector(".Dice").style.visibility="visible";

if(PlayerOne){
    

    if (Dice==0) {
        ScorePlayerOne.textContent= ScoreP1 = 0;
        SwitchPlayer();
    }
        
        
    
    
    if (Dice==1) {
        ScorePlayerOne.textContent= ScoreP1 += diceTwo
    }
    
    if (Dice===2) {
        ScorePlayerOne.textContent = ScoreP1 += diceThree
    }
    
    if (Dice===3) {
        ScorePlayerOne.textContent = ScoreP1 += diceFour
    }
    
    if (Dice===4) {
        ScorePlayerOne.textContent = ScoreP1 += diceFive
    }
    
    if (Dice===5) {
        ScorePlayerOne.textContent= ScoreP1 += diceSix
    }
    
}

else{
    if (Dice==0) {
        ScorePlayerTwo.textContent= ScoreP2 = 0;
        
        SwitchPlayer();
      ;}
        
    
    
    if (Dice==1) {
        ScorePlayerTwo.textContent = ScoreP2 +=  diceTwo
    }
    
    if (Dice===2) {
        ScorePlayerTwo.textContent = ScoreP2 += diceThree
    }
    
    if (Dice===3) {
        ScorePlayerTwo.textContent = ScoreP2 += diceFour
    }
    
    if (Dice===4) {
        ScorePlayerTwo.textContent = ScoreP2 += diceFive
    }
    
    if (Dice===5) {
        ScorePlayerTwo.textContent= ScoreP2 += diceSix
    }
}

})


HoldBtn.addEventListener("click", ()=>{
    if (PlayerOne) {
        document.querySelector(".CurrentScoreOne").textContent= CurrentScoreOne += ScoreP1;
        ScorePlayerOne.textContent = 0
        ScoreP1 =0
        
    if(CurrentScoreOne!==0){
        SwitchPlayer();
        document.querySelector(".Dice").style.visibility="hidden";
            
    }

     

        
    } else {
        document.querySelector(".CurrentScoreTwo").textContent= CurrentScoreTwo += ScoreP2
        ScorePlayerTwo.textContent = 0
        ScoreP2 =0

        if(CurrentScoreTwo!==0){
            SwitchPlayer();
            document.querySelector(".Dice").style.visibility="hidden";
        }

     
        
        if (CurrentScoreOne>=100) {
            document.querySelector(".Winner").textContent="Player One is the Winner !!";
            document.querySelector(".Winner").style.visibility="Visible"
            document.querySelector(".Dice").style.visibility="hidden";
            ScorePlayerOne.style.visibility="hidden";
            ScorePlayerTwo.style.visibility="hidden";
            document.querySelector(".PlayerTurn").style.Visibility="Hidden"

        }       

        if (CurrentScoreTwo>=100) {
            document.querySelector(".Winner").textContent="Player Two is the Winner !!";
            document.querySelector(".Winner").style.visibility="Visible"
            document.querySelector(".Dice").style.display="none";
            ScorePlayerTwo.style.visibility="Hidden"
            ScorePlayerOne.style.visibility="Hidden"
            document.querySelector(".PlayerTurn").style.Visibility="Hidden"

        }


}});

NewGameBtn.addEventListener("click",()=>{
    Restart()
})




