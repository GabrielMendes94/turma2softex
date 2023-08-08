// Exercícios Funções sem retorno

// 1. Crie uma função chamada saudacao que exiba a mensagem "Olá, mundo!" no
// console quando for chamada.

function saudacao() {
    console.log("Olá, mundo!");
}

saudacao();

// 2. Escreva uma função chamada dobro que aceite um parâmetro num e exiba o dobro
// desse número no console.
const readline = require("readline-sync");

function dobro(num) {
    console.log(`O dobro de ${num} é ${num*2}`);
}

num = readline.questionInt("Digite um número: ")
dobro(num);

// 3. Crie uma função chamada mostrarNumeros que receba dois parâmetros, inicio e
// fim. Essa função deve exibir todos os números inteiros no intervalo de inicio a fim
// (inclusive) no console.

function mostrarNumeros(inicio, fim) {
    for (let i = inicio; i <= fim; i++) {
        console.log(i);
    }
}

inicio = readline.questionInt("Digite o número de início: ");
fim = readline.questionInt("Digite o número final:");
mostrarNumeros(inicio, fim);

// 4. Escreva uma função chamada verificarPar que aceite um número como entrada e
// exiba no console se o número é par ou não.

function verificarPar(num) {
    if (num%2==0) {
        console.log(`${num} é par.`);
    }else{
        console.log(`${num} é ímpar`);
    }
}

verificarPar(2);
verificarPar(3);

// 5. Crie uma função chamada imprimirLista que aceite um array como parâmetro e
// exiba cada elemento desse array no console, um por um.

function imprimirLista(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
  }
}

imprimirLista([1,2,3,4,5]);

// ________________________________Parte2____________________________________________

/*1. Escreva uma função chamada calcularMedia que receba um array de números como
parâmetro e calcule a média desses números. Não é necessário exibir o resultado,
apenas retorne o valor da média.*/

function calcularMedia(numeros) {
    let soma=0;
    for (let i = 0; i < numeros.length; i++) {
        soma+=numeros[i];
    }
    console.log(soma/numeros.length);
    
}

calcularMedia([1,2,3,4,5]);

/*2. Crie uma função chamada maiorNumero que receba um array de números como
parâmetro e exiba o maior número presente no array no console.*/


function maiorNumero(numeros){
    let maior;
    for (let i = 0; i < numeros.length; i++) {
        if(maior>)
        
    }
}



/*3. Escreva uma função chamada contarVogais que aceite uma string como parâmetro e
conte quantas vogais (a, e, i, o, u) ela contém. Exiba o resultado no console.*/





/*4. Crie uma função chamada imprimirTabuada que aceite um número como entrada e
exiba a tabuada desse número de 1 a 10 no console.*/




/*5. Escreva uma função chamada verificarPrimo que receba um número como parâmetro e
exiba no console se o número é primo ou não.*/