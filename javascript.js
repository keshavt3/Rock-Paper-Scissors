function getComputerChoice() {
    let randnum = Math.random();
    if (randnum < 0.34) {
        return "rock";
    } else if (randnum <= 0.67) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let choice = prompt("Choose rock, paper, or scissors");
    return choice;
}



function playGame(){
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase();
    switch(humanChoice) {
        case "rock":
            switch(computerChoice){
                case "rock":
                    console.log("You tie! Both chose Rock!");
                    break;
                case "paper":
                    console.log("You lose! Paper smothers Rock!");
                    computerScore += 1;
                    break;
                case "scissors":
                    console.log("You win! Rock smashes Scissors!");
                    humanScore += 1;
                    break;
            }
            break;
        case "paper":
            switch(computerChoice){
                case "rock":
                    console.log("You win! Paper smothers Rock!");
                    humanScore += 1;
                    break;
                case "paper":
                    console.log("You tie! Both chose Paper!");
                    break;
                case "scissors":
                    console.log("You lose! Scissors cuts Paper!");
                    computerScore += 1;
                    break;
            }
            break;
        case "scissors":
            switch(computerChoice){
                case "rock":
                    console.log("You lose! Rock smashes Scissors!");
                    computerScore += 1;
                    break;
                case "paper":
                    console.log("You Win! Scissors cuts Paper!");
                    humanScore += 1;
                    break;
                case "scissors":
                    console.log("You tie! Both chose Scissors!");
                    break;
            }
            break;
    }
    }
    for(let i = 0; i < 5;i++){
        let human = getHumanChoice();
        const computer = getComputerChoice();
        playRound(human, computer);
    }
    if (computerScore > humanScore){
        console.log("HAHA! I WIN YOU LOSE!");
    }else if (computerScore === humanScore){
        console.log("It's a tie. I went easy on you.");
    }else{
        console.log("Game takes no skill. You won through luck.");
    }
}

playGame();


