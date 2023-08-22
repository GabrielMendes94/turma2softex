// Lista for.. in e for.. of

//1. Dado um array de números [3, 7, 2, 9, 5], crie um loop "for" que itere pelo array e exiba cada elemento no console.

numeros = [3, 7, 2, 9, 5];
for (const i of numeros) {
    console.log(i);
}

//2. Suponha que você tenha um objeto com valores numéricos: {a: 10, b: 20, c: 30, d: 40}. 
//Utilize um laço "for...in" para iterar pelas chaves do objeto e calcular a soma de todos os valores.

objetoNum = { a: 10, b: 20, c: 30, d: 40 };

let soma = 0;
for (let i in objetoNum) {
    soma += objetoNum[i];
}
console.log(`Soma: ${soma}`);


//3. Dado um array de números [12, 5, 8, 21, 16, 7], crie um loop "for" que itere pelo array, 
//verificando se cada número é par. Se for par, adicione-o a um novo array. No final, exiba o novo array com os números pares.

let numeros2 = [12, 5, 8, 21, 16, 7];
let pares = [];

for (const i of numeros2) {

    if (i % 2 == 0) {
        pares.push(i);
    }
}
console.log(`Pares: ${pares}`);

//4. Considere um objeto com informações de estudantes: const estudantes = { alice: 18, bob: 20, carol: 19, david: 21 }; 
//Utilize um loop "for...in" para verificar se há um estudante com a idade de 19 anos. Se sim, exiba "Nome do estudante: idade" no console.

const estudantes = { alice: 18, bob: 20, carol: 19, david: 21 }

for (const i in estudantes) {
    if (estudantes[i] == 19) {

        console.log(`Nome do estudante: ${estudantes[i]}`);

    }
}

//5. Imagine que você tem uma matriz bidimensional representando uma grade de pontos: const pontos = [ [2, 5, 8], [3, 9, 12], [4, 6, 10] ]; 
// Utilize dois loops "for" aninhados para calcular a soma de todos os elementos da matriz e exibir o resultado.

const pontos = [[2, 5, 8], [3, 9, 12], [4, 6, 10]];

soma=0;
for (const linha of pontos) {
    for (const coluna of linha) {
        soma+=coluna;
    }
}
console.log(`A soma de todos os elementos da matriz é ${soma}`);
