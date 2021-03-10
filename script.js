const playerName = prompt("What is your name ?");
let playTheGame = true;
let numberPlayer = 0;

function choiceNumberPlayer (positionGame){
    let message = "";
    switch (positionGame){
        case "start":
            message = "What is your number ? (between 1 to 100)";
            break;
        case "less":
            message = "It's less! Retry your chance ! (between 1 to 100)";
            break;
        case "more":
            message = "It's more! Retry your chance ! (between 1 to 100)";
            break;
        case "NaN":
            message = "You idiot! Choice a number ! (between 1 to 100)";
            break;
        default:
            alert("Sorry!");
    }
    numberPlayer = parseInt(prompt(message));
}

function reStartTheGame (){
    let closed = confirm("Do you want replay this game ?");
    if (closed === false){
        alert("GoodBye !!!");
        playTheGame = false;
    }
}

function theGame (){
    const numberSecret = Math.floor(Math.random() * 100) + 1;
    let round = 1;

    choiceNumberPlayer("start");

    while (numberPlayer !== numberSecret){
        if (numberPlayer > numberSecret) {
            choiceNumberPlayer("less");
        }else if (numberPlayer < numberSecret) {
            choiceNumberPlayer("more");
        }else if (isNaN(numberPlayer)) {
            choiceNumberPlayer("NaN");
        }
        round++;
    }

    alert(`Congratulations, ${playerName}! You win in ${round} rounds! :D"`);
    reStartTheGame();
}

while (playTheGame === true){
    theGame();
}

