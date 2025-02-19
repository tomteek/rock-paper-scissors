   //randomly generate a number betwen 1 and 3 then assign choice based on number
   function getComputerChoice() {         
    let comchoice = Math.floor(Math.random() * (3) + 1);
        if (comchoice === 1) {
        return 'rock';
    }   else if (comchoice === 2) {
        return 'paper';
    }   else (comchoice === 3) 
        return 'scissors';
}

//prompt user to type either rock paper or scissors
function getHumanChoice() {
        let humchoice = prompt('rock, paper or scissors?').toLowerCase();
        if (humchoice === "rock"){
        return "rock";
        } else if (humchoice === "paper"){
        return "paper";
        } else if (humchoice === "scissors"){
        return "scissors";
        } else {
        console.log("please choose from the three options.")
        getHumanChoice();
        }
}

//play 1 round   
function playRound(humanSelection, computerSelection) {
    if (humanSelection === computerSelection) {
        console.log(`You chose ${humanSelection}. Computer chose ${computerSelection}. Tie!`)
        return "tie";
    } 
    else if (
            (humanSelection === 'rock' && computerSelection === 'scissors') ||
            (humanSelection === 'paper' && computerSelection === 'rock') ||
            (humanSelection === 'scissors' && computerSelection === 'paper')
            ) {
                console.log(`You win. ${humanSelection} beats ${computerSelection}!`)
                return "human";
    } else {
                console.log(`You lose. ${humanSelection} loses to ${computerSelection}!`)
                return "computer";
        }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
   
    for(let i = 1; i <=5; i++) {
        console.log(`Round ${i}`)
    
    const computerSelection = getComputerChoice();
    const humanSelection = getHumanChoice();
    let result = playRound(humanSelection, computerSelection);
            
    if (result === "human") {
        humanScore++;
    } else if (result === "computer") {
        computerScore++;
    }
    console.log(`Current Score - You: ${humanScore}, Computer: ${computerScore}`);
}
    // Determine the final winner
    console.log("Final Results:");
    if (humanScore > computerScore) {
        console.log("You win the game! 🎉");
    } else if (computerScore > humanScore) {
        console.log("The computer wins the game! 🤖");
    } else {
        console.log("It's a tie game! 😐");
    }
}

    playGame();
    