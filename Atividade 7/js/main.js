//1

function Retangulo(base, altura) {
    this.base = base;
    this.altura = altura;

    this.calculaArea = function () {
        var area = this.base * this.altura;
        return area;
    }
}

var meuRetangulo = new Retangulo(5, 4);
alert("A area do retangulo é: " + meuRetangulo.calculaArea());


//2

function Conta() {
    var nomeCorrentista;
    var banco;
    var numeroConta;
    var saldo;

    //Set's
    this.setNomeCorrentista = function (vNomeCorrentista) {
        nomeCorrentista = vNomeCorrentista;
    };
    this.setBanco = function (vBanco) {
        banco = vBanco;
    };
    this.setNumeroConta = function (vNumeroConta) {
        numeroConta = vNumeroConta;
    };
    this.setSaldo = function (vSaldo) {
        saldo = vSaldo;
    };

    //Get's
    this.getNomeCorrentista = function () {
        return nomeCorrentista;
    };
    this.getBanco = function () {
        return banco;
    };
    this.getNumeroConta = function () {
        return numeroConta;
    };
    this.getSaldo = function () {
        return saldo;
    };
}

function Corrente() {
    var saldoEspecial;
    this.getSaldoEspecial = function () {
        return saldoEspecial;
    };
    this.setSaldoEspecial = function (vSaldoEspecial) {
        saldoEspecial = vSaldoEspecial;
    };
}

function Poupanca() {
    var juros;
    var dataVencimento;
    this.getJuros = function () {
        return juros;
    };
    this.getDataVencimento = function () {
        return dataVencimento;
    };

    this.setJuros = function (vJuros) {
        juros = vJuros;
    };
    this.setDataVencimento = function (vDataVencimento) {
        dataVencimento = vDataVencimento;
    };
}

// Criando a herança

Corrente.prototype = new Conta();
Poupanca.prototype = new Conta();

//Criando objetos

nCorrente = new Corrente();
nPoupanca = new Poupanca();

//Atribuindo valores ao objeto nCorrente

nCorrente.setNomeCorrentista("Gabriel Paulino");
nCorrente.setBanco("Santander");
nCorrente.setNumeroConta("45280998-6");
nCorrente.setSaldo(12500.75);
nCorrente.setSaldoEspecial(1000);

alert("O correntista " + nCorrente.getNomeCorrentista() + "\nPossui uma conta no banco " + nCorrente.getBanco() + "\nO numero de sua conta é: " + nCorrente.getNumeroConta() + "\nPossui um saldo de R$" + nCorrente.getSaldo() + "\nPossui um saldo Especial de R$" + nCorrente.getSaldoEspecial());


nPoupanca.setNomeCorrentista("Roberto Souza");
nPoupanca.setBanco("Santander");
nPoupanca.setNumeroConta("02181115-6");
nPoupanca.setSaldo(137528.75);
nPoupanca.setJuros(0.17);
nPoupanca.setDataVencimento(20);


alert("O mão de vaca " + nPoupanca.getNomeCorrentista() + "\nPossui uma poupança no banco " + nPoupanca.getBanco() + "\nO numero de sua conta é: " + nPoupanca.getNumeroConta() + "\nPossui um saldo de R$" + nPoupanca.getSaldo() + "\nPossui uma taxa de juros incrivel de " + nPoupanca.getJuros() + "%\nE seus vencimentos são no dia: " + nPoupanca.getDataVencimento());



