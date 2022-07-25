//Funkcia náhodného výberu možnosti(0 = ROCK, 1 = PAPER, 2 = SCISSORS)
function computerChooseOption () {
    const computerChoosenOption = Math.floor(Math.random() * 3);
    console.log("PC " + computerChoosenOption);
    return computerChoosenOption
};



//Funkcia výberu užívateľa ktorá akceptuje input užívateľa
function userChooseOption () {
    let userChoosenOption = prompt("Choose your option: ROCK, PAPER or SCISSORS");
    userChoosenOption = userChoosenOption.toUpperCase();
    if (userChoosenOption == "ROCK") {
        userChoosenOption = 0
    } else if (userChoosenOption == "PAPER") {
        userChoosenOption = 1
    } else if (userChoosenOption == "SCISSORS") {
        userChoosenOption = 2
    } else {
        alert("WRONG INPUT!")
    };
    console.log("user " + userChoosenOption);
    return userChoosenOption
};



//Funkcia na porovnanie vybraných možností a vypísanie výsledku
function compareOptions () {
    user = userChooseOption();
    computer = computerChooseOption()
    gameResult = (3 + user - computer) % 3;
    console.log("result " + gameResult)
    if (gameResult == 1) {
        alert("YOU WON ROUND")
    } else if ( gameResult == 2) {
        alert("YOU LOST ROUND")
    } else {
        alert("IT IS A DRAW")
    }
    return gameResult
};


function game () {
    let userScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        let roundResult = compareOptions()
        if (roundResult == 1) {
            userScore++
        } else if (roundResult == 2) {
            computerScore++
        } else {
            userScore++;
            computerScore++;
        };
        console.log("user score " + userScore);
        console.log("pc score " + computerScore);
    };
    if (userScore > computerScore) {
        alert("You won the game" + " " + userScore + ":" + computerScore)
    } else if (userScore < computerScore) {
        alert("You lost the game" + " "+ userScore + ":" + computerScore)
    } else alert("It is a draw" + " " + userScore + ":" + computerScore)
};

game();