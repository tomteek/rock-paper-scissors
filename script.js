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

//prompt user to type rock paper or sciss
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