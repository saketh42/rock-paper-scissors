let computerScore = 0;
let humanScore = 0;

const buttons = document.querySelectorAll("button");
const resultDisplay = document.querySelector("#result");

function getComputerChoice() {
    let r = Math.floor(Math.random() * 3);
    if (r === 0) {
        return "Rock";
    } else if (r === 1) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function playRound(humanChoice) {
    const computerChoice = getComputerChoice();

    if (computerChoice === humanChoice) {
        return { result: "T", computerChoice: computerChoice }; // Tie
    } else if (
        (computerChoice === "Rock" && humanChoice === "Scissors") ||
        (computerChoice === "Scissors" && humanChoice === "Paper") ||
        (computerChoice === "Paper" && humanChoice === "Rock")
    ) {
        computerScore++;
        return { result: "L", computerChoice: computerChoice }; // Loss
    } else {
        humanScore++;
        return { result: "W", computerChoice: computerChoice }; // Win
    }
}

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const humanChoice = button.textContent;
        const outcome = playRound(humanChoice);

        let msg = "";

        if (outcome.result === "W") {
            msg = `You win! Computer chose ${outcome.computerChoice}.`;
        } else if (outcome.result === "L") {
            msg = `You lose! Computer chose ${outcome.computerChoice}.`;
        } else {
            msg = `It's a tie! Computer chose ${outcome.computerChoice}.`;
        }
        
        const score = `Human: ${humanScore} - Computer: ${computerScore}`;
    
        resultDisplay.textContent = `${msg}\n${score}`;
    });
});
