// Mais um pouco sobre Arrays

const usuarios = [
    { nome: "Robinson", idade: 18 },
    { nome: "William", idade: 28 },
    { nome: "Janaina", idade: 19 },
    { nome: "Carla", idade: 25 },
    { nome: "Maíra", idade: 32 },
    { nome: "George", idade: 30 },
    { nome: "Camila", idade: 27 },
];

// for (let i = 0; i < usuarios.length; i++) {
//     console.log(`Nome: ${usuarios[i].nome}, Idade: ${usuarios[i].idade} anos.`);
//     // console.log(usuarios[i]);
//     // console.log(usuarios[i].idade);
// }

// for (let item in usuarios) {
//     console.log(usuarios[item].nome);
//     console.log(usuarios[item].idade);
// }

// for (let i in usuarios) {
//     console.log(`Nome: ${usuarios[i].nome}, Idade: ${usuarios[i].idade} anos.`);
// }


// for (let elemento of usuarios) {
//     console.log(`Nome: ${elemento.nome}, Idade: ${elemento.idade} anos.`);
// }

const numeros = [150, 100, 200, 250, 50];
const palavras = ["cadeira", "lapis", "caneta", "caderno", "mesa"];
const logicos = [true, false, false, true, true]


for (let i in numeros) {
    console.log(numeros[i]);
}

for (let i of numeros) {
    console.log(i);   
}

for (let i in palavras) {
    console.log(palavras[i]);
}

for (let i of palavras) {
    console.log(i);
}

for (let i in logicos) {
    console.log(logicos[i]);
}

for (let i of logicos) {
    console.log(i);
}