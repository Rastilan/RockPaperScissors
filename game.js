const CHOICE = ["rock", "paper", "scissors"];
let computerSelection = "";
let playerSelection = "";
let computerScore = 0;
let playerScore = 0;

function computerPlay (){
    let cpuTurn = Math.floor(Math.random() * CHOICE.length);
    return computerSelection = CHOICE[cpuTurn];
    
}
function userPlay(selection){
    computerPlay();
    switch(selection){
        case "rock":
            playerSelection = "rock";
            whoWon(computerSelection, playerSelection);
            return;
        case "paper":
            playerSelection = "paper";
            whoWon(computerSelection, playerSelection);
            return;
        case "scissors":
            playerSelection = "scissors";
            whoWon(computerSelection, playerSelection);
            return;
        default:
            console.log("Default was reached in userPlayer, something broke");
    }
    
}
function whoWon(cpu, player){
    switch (player){
        case "rock":
            switch(cpu){
                case "rock":
                    Game(player, cpu);
                    return;

                case "paper":
                    computerScore++;
                    Game(player, cpu);
                    return;

                case "scissors":
                    playerScore++;
                    Game(player, cpu);
                    return;

            }

        case "paper":
            switch(cpu){
                case "rock":
                    playerScore++;
                    Game(player, cpu);
                    return;

                case "paper":
                    Game(player, cpu);
                    return;

                case "scissors":
                    computerScore++;
                    Game(player, cpu);
                    return;

            }

        case "scissors":
            switch(cpu){
                case "rock":
                    computerScore++;
                    Game(player, cpu);
                    return;

                case "paper":
                    playerScore++;
                    Game(player, cpu);
                    return;

                case "scissors":
                    Game(player, cpu);
                    return;

            }

    }
}


function Game(player, cpu) {
    document.getElementById("result").innerHTML = "You did " + player + " and the bot did " + cpu;
    document.getElementById("playerScore").innerHTML = playerScore;
    document.getElementById("computerScore").innerHTML = computerScore;
    if(playerScore === 5){
        document.getElementById("winScreen").innerHTML = "You Won!";
        document.getElementById("playerScore").innerHTML = playerScore;
        document.getElementById("computerScore").innerHTML = computerScore;
    }
    else if(computerScore === 5){
        document.getElementById("winScreen").innerHTML = "You Lost!";
        playerScore = 0;
        computerScore = 0;
        document.getElementById("playerScore").innerHTML = playerScore;
        document.getElementById("computerScore").innerHTML = computerScore;
    }
    else {

    }
}
