# RPS_Game
vytvoríme súbor s html- index.html
vytvoríme súbor s kódom - script.js
do html súboru vložíme cestu ku súboru script.js
ďalej pracujeme už len v súbore script.js

Vytvoríme funkciu bez náhodného výberu možnosti(rock paper scisors) - computerChooseOption
    vytvoríme const computerChoosenOption kde uložíme náhodne vybranú možnosť (ROCK,PAPER, SCISSORS)
    vytvoríme const randomNumber kde uložíme náhodné číslo od 1 do 3
    použijeme return computerChoosenOption


vytvoríme funkciu výberu užívateľa ktorá akceptuje input užívateľa- userChooseOption
    vytvoríme premennú let userCHoosenOption
    premennej userChoosenOption priradíme hodnotu inputu klienta na otázku: Choose your weapon: rock, paper or scissors?
    hodnotu userChoosenOption zameníme na veľké písmená
    napíšeme if podmienku-
        ak je userChoosenOption "ROCK" premennej computerChoosenOption priradíme hodnotu 0
        ak je userChoosenOption "PAPER" premennej computerChoosenOption priradíme hodnotu 1
        ak je userChoosenOption "SCISSORS" premennej priradíme hodnotu 2
        inak vyskočí okno: INPUT ERRORR!
    použijeme return userChoosenOption





|vytvoríme funkciu na porovnanie vybraných možností-  compareOptions
    vytvoríme premennú gameResult
    (3+X-Y) % 3 
