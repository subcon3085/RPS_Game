//Po kliknutí na button START voláme funkciu oneRound
const element = document.getElementById("start");
element.addEventListener("click", oneRound);
const result = document.getElementById("result")


//Funkcia jedného kola po stisknutí štart
function oneRound() {
    pressStart();
    buttonRock.addEventListener("click", () => compareOptions(0));
    buttonPaper.addEventListener("click", () => compareOptions(1));
    buttonScissors.addEventListener("click", () => compareOptions(2));
}


//Vyhodnotí výhercu kola a vypíše výsledok 
function compareOptions (user) {
    let computer = computerChooseOption()
    let gameResult = (3 + user - computer) % 3;
    console.log(user);
    console.log(computer);
    console.log("result " + gameResult)
    if (gameResult == 1) {
        result.innerHTML= "YOU WON THIS ROUND"
    } else if ( gameResult == 2) {
        result.innerHTML= "YOU LOST THIS ROUND"
    } else {
        result.innerHTML= "IT IS A DRAW"
    }
    return gameResult
};



//Funkcia odmaže button start a pridá inštrukcie + 3 buttony výberu RPS
function pressStart() {
    
    const container2 = document.getElementById("container2");
    const startButton = document.getElementById("start");
    const info = document.getElementById("info");
    startButton.remove();

    info.innerHTML = "CHOOSE YOUR WEAPON";
    buttonRock = document.createElement('button');
    buttonRock.setAttribute("id", "rock");
    buttonRock.innerHTML = "ROCK";
    buttonPaper = document.createElement('button');
    buttonPaper.setAttribute("id", "paper");
    buttonPaper.innerHTML = "PAPER";
    buttonScissors = document.createElement('button');
    buttonScissors.setAttribute("id", "scissors");
    buttonScissors.innerHTML = "SCISSORS";
    container2.append(buttonRock, buttonPaper, buttonScissors);
};

//Funkcia náhodného výberu PC (0 = ROCK, 1 = PAPER, 2 = SCISSORS)
function computerChooseOption () {
    const computerChoosenOption = Math.floor(Math.random() * 3);
    return computerChoosenOption
}