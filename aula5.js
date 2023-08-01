// let idade=16;
// let autorizacao="nao";

// if (idade>=18) {
//     console.log("Você tem permisssão para dirigir");
// } else if((idade>=16) && (idade<18)){
//     if (autorizacao==="sim"){
//         console.log("Você tem permissão para dirigir");
//     }else{
//         console.log("Você não tem permissão para dirigir (falta autorização dos pais)");
//     }
// }else{
//     console.log("Você não tem permissão para dirigir");

// }

//SWITCH

// let num = 0;
const readline = require("readline-sync")
// num = readline.questionInt("Digite um número de 1 a 7 :");
// console.log("O nome digitado foi ", num);

// //Q1
// switch (num) {
//     case 1:
//         console.log(num, "Domingo");
//         break;
//     case 2:
//         console.log(num, "Segunda-feira");
//         break;
//     case 3:
//         console.log(num, "Terça-feira");
//         break;
//     case 4:
//         console.log(num, "Quarta-feira")
//         break;
//     case 5:
//         console.log(num, "Quinta-feira")
//         break;
//     case 6:
//         console.log(num, "Sexta-feira")
//         break;
//     case 7:
//         console.log(num, "Sábado")
//         break;
//     default:
//         break;
// }

// //Q2
// let mes = 0;
// mes = readline.questionInt("Digite o número do mês (1 a 12) : ");
// switch (mes) {
//     case 1:
//         console.log("Janeiro");
//         break;

//     case 2:
//         console.log("Fevereiro");
//         break;

//     case 3:
//         console.log("Março");
//         break;

//     case 4:
//         console.log("April");
//         break;

//     case 5:
//         console.log("Maio");
//         break;

//     case 6:
//         console.log("Junho");
//         break;

//     case 7:
//         console.log("Julho");
//         break;

//     case 8:
//         console.log("Agosto");
//         break;

//     case 9:
//         console.log("Setembro");
//         break;

//     case 10:
//         console.log("Outubro");
//         break;

//     case 11:
//         console.log("Novembro");
//         break;

//     case 12:
//         console.log("Dezembro");
//         break;

//     default:
//         break;
// }

//Q3
// let estCivil = readline.question("Digite seu estado civil: ")
// switch (estCivil) {
//     case "solteiro":
//         console.log("Estado civil: ", estCivil);
//         break;

//     case "casado":
//         console.log("Estado civil: ", estCivil);
//         break;

//     case "divorciado":
//         console.log("Estado civil: ", estCivil);
//         break;

//     case "outro":
//         console.log("Estado civil: ", estCivil);
//         break;

//     default:
//         break;
// }

//Q4
// let animal = readline.question("Digite o tipo do animal: ")
// switch (animal) {
//     case "cachorro":
//         console.log("Animal digitado: ", animal);
//         break;

//     case "gato":
//         console.log("Animal digitado: ", animal);
//         break;

//     case "passaro":
//         console.log("Animal digitado: ", animal);
//         break;

//     case "outro":
//         console.log("Animal digitado: ", animal);
//         break;

//     default:
//         break;
// }

//Q5
console.log("Menu: ");
console.log("(1) - Soma");
console.log("(2) - Subtração");
console.log("(3) - Multiplicação");
console.log("(4) - Divisão");
let operacao = readline.questionInt("Digite a opção da operação a ser realizada: ");
let num1 = readline.questionFloat("Digite o valor do primeiro número: ");
let num2 = readline.questionFloat("Digite o valor do segundo número: ")

switch (operacao) {
    case 1:
        console.log(num1," + ",num2," = ",(num1 + num2));
        break;

    case 2:
        console.log(num1," - ",num2," = ",(num1 - num2));
        break;

    case 3:
        console.log(num1," * ",num2," = ",(num1 * num2));
        break;

    case 4:
        console.log(num1," / ",num2," = ",(num1 / num2));
        break;

    default:
        break;
}

//npm install readline-sync
/*const readline = require("readline-sync")
var nome = readline.question("Digite o seu nome");
console.log("O nome digitado foi ",nome);*/
