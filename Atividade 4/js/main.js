var userChoice = prompt("Pedra, Papel ou Tesoura?").toLowerCase();

var computerChoice = function () {
    var numero = Math.random().toFixed(2);

    if (numero < 0.33) {
        return "pedra";
    } else if (numero < 0.66) {
        return "papel";
    } else {
        return "tesoura";
    }
}();

var gameResult = function () {
    if ((userChoice == "papel" && computerChoice == "pedra")
        || (userChoice == "pedra" && computerChoice == "tesoura")
        || (userChoice == "tesoura" && computerChoice == "papel")) {
        return "você venceu!";
    }
    else if ((userChoice == "pedra" && computerChoice == "papel")
        || (userChoice == "tesoura" && computerChoice == "pedra")
        || (userChoice == "papel" && computerChoice == "tesoura")) {
        return "você perdeu!";
    }
    else {
        return "empatou!";
    }
}();

alert(`VOCÊ escolheu: ${userChoice.toUpperCase()}
\no COMPUTADOR escolheu: ${computerChoice.toUpperCase()}
\nentão ${gameResult.toUpperCase()}`);