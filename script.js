const userChoiceDisplay = document.getElementById('userChoice')
const computerChoiceDisplay = document.getElementById('computerChoice')
const resultDisplay = document.getElementById('result')
//get all the possible choices
let userChoice
let result
let userScore = document.getElementById('you')
let computerScore = document.getElementById('pc')
let roundWinner = ''
const possibleChoices = document.querySelectorAll('button')

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
 userChoice = e.target.id
 userChoiceDisplay.innerHTML = userChoice
 //generate computer choice upon click as well
 generateComputerChoice()
 getScore()
}))

function generateComputerChoice() {
 const randomNumber = Math.floor(Math.random() * possibleChoices.length )
 // to make sure it's working: console.log(randomNumber)
 if ( randomNumber === 0 ) {
  computerChoice = 'Rock'
 }
 if ( randomNumber === 1 ) {
  computerChoice = 'Paper'
 }
 if ( randomNumber === 2 ) {
  computerChoice = 'Scissors'
 }
 computerChoiceDisplay.innerHTML = computerChoice
}
//display result
function getScore(userChoice, computerChoice) {
 if(userChoice === computerChoice){
 result = "It's a draw!"
} else if((userChoice === 'Rock' && computerChoice === 'Scissors') ||
          (userChoice === 'Paper' && computerChoice === 'Rock') ||
          (userChoice === 'Scissors' && computerChoice === 'Paper')){
 result = "You win!"
 userScore++
} else {
 result = "You lose!"
 computerScore++
}
resultDisplay.innerHTML = result
}

//work on scores, they still don't work
