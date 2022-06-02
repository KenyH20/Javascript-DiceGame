let NewGameBtn =document.querySelector(".NewGame")
let RollDiceBtn =document.querySelector(".RollDiceBtn")
let HoldBtn =document.querySelector(".HoldBtn")
let ScorePlayerOne =document.querySelector(".ScorePlayerOne")
let ScorePlayerTwo =document.querySelector(".ScorePlayerTwo")
let DiceNumber=new Array("Image/dice-1.png","Image/dice-2.png","Image/dice-1.png","Image/dice-4.png","Image/dice-5.png","Image/dice-6.png")

RollDiceBtn.addEventListener("click", ()=>{
    let Dice =Math.floor(Math.random()*DiceNumber.length);
    document.querySelector(".Dice").src=DiceNumber[Dice];
    document.querySelector(".Dice").style.display="block";
    

})