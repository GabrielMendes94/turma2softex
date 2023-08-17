/*1.Crie um programa que recebe do teclado um número e tenta dividir por
zero dentro de um bloco try...catch. Capture o erro e o exiba "Erro:
Divisão por zero" no console.*/

const readline = require("readline-sync");

// try {
//     const numerador = readline.questionInt("Digite o numerador: ")
//     const divisor = readline.questionInt("Digite o divisor: ")

//     if (divisor === 0) {

//         throw "Erro";

//     }

//     const resultado = numerador / divisor;

//     console.log("O resultado é:", resultado);

// } catch (error) {

//     console.error("Erro: Divisão por zero");

// }


/*2.Crie um programa que recebe do teclado uma string não numérica em um
número utilizando parseInt dentro de um bloco try...catch. Capture o erro
e o exiba "Erro: Conversão inválida" no console.*/

// try {

//     let str = readline.question("Digite uma string: ");
//     console.log(typeof str);

//     if (isNaN(str)){
//         throw "Erro";
//     }

//     const num = parseInt(str);
//     console.log(typeof num);

//     console.log(`Funcionou: ${num}`);

// } catch (error) {
//     console.error("Erro: Conversão inválida");
// }

/*3.Crie um programa que recebe do teclado um objeto e tente acessar uma
propriedade inexistente desse objeto dentro de um bloco try...catch.
Capture o erro e o exiba "Erro: Propriedade não encontrada" no console.*/

let pessoa = {};
pessoa.nome = readline.question("Digite o nome: ");
pessoa.idade = readline.questionInt("Digite sua idade: ");

try {

    console.log(pessoa.nome);
    console.log(pessoa.idade);
    
    if (pessoa.altura == undefined) {
        throw "Erro";
    }
    console.log(pessoa.altura);

} catch (error) {
    console.error("Erro: Propriedade não encontrada.");

}
