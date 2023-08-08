//Funções

function exibirSaudacao() {
    console.log("Hello, World!");
}

exibirSaudacao();

const readline = require("readline-sync");
let nome,idade, dia, mes, ano;

function saudarPessoa(nome,idade,dia,mes,ano) {
    nome = readline.question("Digite o seu nome: ");
    idade = readline.questionInt("Digite sua idade: ");
    dia = readline.questionInt("Dia(dd): ");
    mes = readline.questionInt("Mês(mm): ");
    ano = readline.questionInt("Ano(aaaa): ");
    console.log(`Boa tarde, ${nome}! Notei que você tem ${idade} anos. Hoje é ${dia} do ${mes} de ${ano}.`);
}

saudarPessoa(nome,idade,dia,mes,ano);