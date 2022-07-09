const choices = ["rock", "paper", "scissors"];
const rockButton = document.getElementById("rockbtn")
const paperButton = document.getElementById("paperbtn")
const scissorsButton = document.getElementById("scissorsbtn")
const updateText = document.getElementById('textField')
const restartButton = document.getElementById("restart")
const winScoreDisplay = document.getElementById("textFieldScore")
const loseScoreDisplay = document.getElementById("textFieldScoreTwo")
const scoreDisplay = document.getElementById("scoreBoxx")
let computersChoice
let yourChoice
let status
let statusComp
let numHolder = 0
let cNumHolder = 0
 
//function for when user clicks rock button
function userRock() {
    rockButton.addEventListener ("click", function() {
        yourChoice = choices[0]  
        execute()
  });
}
 
// function for when user clicks paper button
function userPaper() {
    paperButton.addEventListener ("click", function() {
        yourChoice = choices[1]   
        execute()
  });
}
 
// function for when user clicks scissors button
function userScissors() {
    scissorsButton.addEventListener ("click", function() {
        yourChoice = choices[2]
        execute()
  });
}
 
// creates abstraction -- combines checker and computersTurn function
function execute(){
    checker()
    computersTurn()
    scoreDisplay.classList.remove('hide')
}
 
// checks to see if user made a choice
function checker(){
    if (yourChoice === choices[0]) {
        status ='rock'
    } else if (yourChoice === choices[1]) {
        status = 'paper'
    } else if (yourChoice === choices[2]) {
        status = 'scissors'
    }
  }  
 
// computer chooses
function computersTurn() {
        computersChoice = choices[Math.floor(Math.random() * choices.length)];
        statusComp = computersChoice
        //logs check to make sure the program is running correctly
        console.log(status)
        console.log(statusComp)
        if (status === statusComp) {
            updateText.innerText = 'It\s a tie'
        } else if (status === 'rock' && statusComp === 'paper'){
            updateText.innerText = 'You lose... Computer chose paper'
            cNumHolder +=1
            loseScoreDisplay.innerText = "Computer's Score: " + cNumHolder
        } else if (status === 'rock' && statusComp === 'scissors'){
            updateText.innerText = 'You win... Computer chose scissors'
            numHolder +=1
            winScoreDisplay.innerText = "Your Score: " + numHolder
        }else if (status === 'paper' && statusComp === 'scissors'){
            updateText.innerText = 'You lose... Computer chose scissors'
            cNumHolder +=1
            loseScoreDisplay.innerText = "Computer's Score: " + cNumHolder
        } else if (status === 'paper' && statusComp === 'rock'){
            updateText.innerText = 'You win... Computer chose rock'
            numHolder +=1
            winScoreDisplay.innerText = "Your Score: " + numHolder
        } else if (status === 'scissors' && statusComp === 'rock'){
            updateText.innerText = 'You lose... Computer chose rock'
            cNumHolder +=1
            loseScoreDisplay.innerText = "Computer's Score: " + cNumHolder
        } else if (status === 'scissors' && statusComp === 'paper'){
            updateText.innerText = 'You win... Computer chose paper'
            numHolder +=1
            winScoreDisplay.innerText = "Your Score: " + numHolder
        }  
  }
 
 
function startGame(){
    userRock()
    userPaper()
    userScissors()
}


startGame()
