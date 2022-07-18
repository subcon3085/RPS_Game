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
function compareOptions (computer, user) {
    gameResult = (3 + user - computer) % 3;
    console.log("výsledok " + gameResult)
    if (gameResult == 1) {
        console.log("YOU ARE WINNER")
    } else if ( gameResult == 2) {
        console.log("YOU ARE LOOSER")
    } else {
        console.log("IT IS A DRAW")
    }
    return gameResult
};

compareOptions(computerChooseOption(), userChooseOption())