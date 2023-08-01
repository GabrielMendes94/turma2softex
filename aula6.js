// let sabores = ["a","b","c","d"];
// sabores.push("e"); //adiciona um elemento no fim do array
// console.log(sabores);
// delete sabores[sabores.length-1]; //deleta o último elemento porém mantém um espaço vazio
// console.log(sabores);
// sabores[sabores.length-1] = "g"; //adiciona um 
// console.log(sabores);
// sabores.splice(3,1) //remove 1 elemento a partir do indice 3
// console.log(sabores);

// ARRAYS
// EXERCÍCIOS

//Q1
const meuArray = [10, 20, 30, 40, 50];
let segundoElemento = meuArray[1];
console.log(segundoElemento);

//Q2
const frutas = ['maça','banana','laranja','uva','manga'];
console.log(frutas.length);

//Q3
frutas.push('pera');
console.log(frutas);

//Q4
frutas.splice(0,1);
console.log(frutas);

//Q5
const numeros = [10, 20, 30, 40, 50];

if (numeros.includes(25)) {
    console.log("Número 25 está presente");
} else {
    console.log("Número 25 não está presente");
}
