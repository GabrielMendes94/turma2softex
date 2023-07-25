const readline = require("readline-sync");
let carta1 = readline.questionInt("Digite o número da primeira carta do jogador: ");
let carta2 = readline.questionInt("Digite o número da segunda carta do jogador: ");
let somaJogador = carta1+carta2;
if (somaJogador>21){
    console.log("Você perdeu!");
}
console.log("Soma do jogador: ",somaJogador);

let cBanco1 = readline.questionInt("Digite o número da primeira carta do banco: ");
let cBanco2 = readline.questionInt("Digite o número da segunda carta do banco: ");
let cBanco3 = readline.questionInt("Digite o número da terceira carta do banco: ");
let cBanco4 = readline.questionInt("Digite o número da quarta carta do banco: ");
let somaBanco = cBanco1+cBanco2+cBanco3+cBanco4;
console.log("Soma do banco: ",somaBanco);

if ((somaBanco>21) || (somaJogador<=21) && (somaJogador>somaBanco)) {
    console.log("Você ganhou!");
} else {
    console.log("O banco venceu!");
}