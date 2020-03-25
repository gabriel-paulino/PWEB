var studentName = prompt("Digite o nome do aluno: ");

var examGrades = [
    parseFloat(prompt("Digite a 1ª nota: ")),
    parseFloat(prompt("Digite a 2ª nota: ")),
    parseFloat(prompt("Digite a 3ª nota: "))
];

var accAvg = 0;

for (var i = 0; i < examGrades.length; i++) {
    accAvg += examGrades[i];
}

alert(`O aluno ${studentName} fechou com média: ${accAvg / i}`);