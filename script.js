//add variables for the game
let computerScore = 0
let playerScore = 0
let roundWinner = ''

//add function for choice outcomes
function playRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        roundWinner = 'Tie';
    }
    if(
        (playerChoice === 'Rock' && computerChoice === 'Scissors') ||
        (playerChoice === 'Paper' && computerChoice === 'Rock') ||
        (playerChoice === 'Scissors' && computerChoice === 'Paper')
    ) {
        playerScore++
        roundWinner = 'Player'
    }
    if(
        (computerChoice === 'Rock' && playerChoice === 'Scissors') ||
        (computerChoice === 'Paper' && playerChoice === 'Rock') ||
        (computerChoice === 'Scissors' && playerChoice === 'Paper')
    ) {
        computerScore++
        roundWinner = 'Computer'
    }
}
