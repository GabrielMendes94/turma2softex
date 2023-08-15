function fatorial(n) {
    if (n === 0 || n === 1) {
        return 1; // Caso base: fatorial de 0 e 1 é 1
    } else {
        return n * fatorial(n - 1); // Chamada recursiva
    }
}

// Teste a função

const readline = require("readline-sync");
const numero = readline.questionInt("Digite um número para saber seu fatorial : ");

console.log(`O fatorial de ${numero} é ${fatorial(numero)}`);


/*1.Crie uma função recursiva chamada somaRecursiva que receba um número
inteiro positivo n como argumento e calcule a soma de todos os números
inteiros de 1 até n.*/

function somaRecursiva(numInt) {
    if (numInt === 1) {
        return 1;
    }
    return numInt + somaRecursiva(numInt - 1);  
}

const numInt = readline.questionInt("Digite um número inteiro positivo : ");
console.log(`A soma de 1 até ${numInt} é  ${somaRecursiva(numInt)}`);


/*2.Escreva uma função chamada fibonacci que receba um número n como
parâmetro e retorne o n-ésimo termo da sequência de Fibonacci. Lembre-se de
implementar essa função de forma recursiva.*/

function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    return (fibonacci(n - 1) + fibonacci(n - 2));
}

const n = readline.questionInt("Termo da sequencia fibonacci (n): ");
console.log(`O ${n}º termo é ${fibonacci(n)}`);