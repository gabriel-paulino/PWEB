var numero1 = prompt("Digite o numero 1: ");
var numero2 = prompt("Digite o numero 2: ");
var numero3 = prompt("Digite o numero 3: ");

var maiorNumero = (n1, n2, n3) => {
    return Math.max(n1, n2, n3);
}

alert(`O maior número é: ${maiorNumero(numero1, numero2, numero3)}`);