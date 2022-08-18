# RPS_Game
vytvoríme súbor s html- index.html
vytvoríme súbor s kódom - script.js
do html súboru vložíme cestu ku súboru script.js
ďalej pracujeme už len v súbore script.js

Vytvoríme funkciu náhodného výberu možnosti(rock paper scisors) - computerChooseOption
    vytvoríme const computerChoosenOption kde uložíme náhodne generované číslo 0,1,2
    0 predstavuje Rock, 1 predstavuje PAPER, 2 predstavuje SCISSORS
    hodnotu computerChoosenOption pre kontrolu logujeme do konzole
    použijeme return computerChoosenOption


vytvoríme funkciu výberu užívateľa ktorá akceptuje input užívateľa - userChooseOption
    vytvoríme premennú let userCHoosenOption
    premennej userChoosenOption priradíme hodnotu inputu klienta na otázku: Choose your option: ROCK, PAPER or SCISSORS?
    hodnotu userChoosenOption zameníme na veľké písmená
    napíšeme if podmienku-
        ak je userChoosenOption "ROCK" premennej computerChoosenOption priradíme hodnotu 0
        ak je userChoosenOption "PAPER" premennej computerChoosenOption priradíme hodnotu 1
        ak je userChoosenOption "SCISSORS" premennej priradíme hodnotu 2
        pri inom zadaní vyskočí okno: WRONG INPUT!
    hodnotu computerChoosenOption pre kontrolu logujeme do konzole
    použijeme return userChoosenOption


|vytvoríme funkciu na porovnanie vybraných možností-  compareOptions
    vytvoríme premennú let user priradíme jej hodnotu funkcie userChooseOption()
    vytvoríme premennú let computer priradíme jej hodnotu funkcie computerChooseOption()
    vytvoríme premennú let gameResult priradíme jej výsledok výpočtu vzorca
    hodnotu gameResult pre kontrolu logujeme do konzole
    vytvoríme if podmienku:
        ak je gameResult 1 vypíšeme alert: "YOU WON ROUND"
        ak je gameResult 2 vypíšeme alert: "YOU LOST ROUND"
        inak vypíšeme alert: "IT IS A DRAW"
    použijeme return gameResult


vytvoríme funkciu kompletnej hry- game
    vytvoríme premennú let userScore ktorá bude počítať score usera
    vytvoríme premennú let computerScore ktorá bude počítať score PC
    vytvoríme cyklus for ktorý spustí 5 kôl hry:
        vytvoríme premennú ktorá zaznamená výsledok jedného kola
        vytvoríme if podmienku ktorá zapisuje body:
            ak je výsledok kola 1 priradíme bod userovi
            ak je výsledok kola 2 priradíme bod PC
            inak priradíme bod obom
        pre kontrolu vypíšeme aktuálne score po každom kole do konzoly
    vytvoríme if podmienku ktorá hodnotí výsledok hry
        ak je user score vyššie než pc score vypíšeme alertom: "You won the game" + " " + userScore + ":" + computerScore
        ak je user score nižšie než pc score vypíšeme alertom: "You lost the game" + " "+ userScore + ":" + computerScore
        inak vypíšeme alertom: It is a draw" + " " + userScore + ":" + computerScore



Hru spustíme vyvolaním funkcie game()