//Exercícios Funções sem retorno com valores padrão

/*1.Crie uma função chamada saudacao que aceita um parâmetro nome para uma
pessoa e exiba no console a saudação "Olá, [nome]!" utilizando um valor padrão
para nome caso nenhum seja fornecido.*/

function saudacao(nome = "pessoa") {
    console.log(`Olá, ${nome}!`);
}

saudacao(); //padrão
saudacao("Gabriel");

/*2.Escreva uma função chamada calculadora que receba dois números (num1 e num2)
 e um operador matemático (operacao) como parâmetros. A função deve realizar a
  operação matemática entre num1 e num2 (por exemplo, adição, subtração,
 multiplicação, divisão) com um valor padrão de operação sendo "+".*/

function calculadora(num1, num2, operacao = 1) {

    switch (operacao) {
        case 1:
            console.log(`${num1} + ${num2} = ${num1 + num2}`);
            break;

        case 2:
            console.log(`${num1} - ${num2} = ${num1 - num2}`);
            break;

        case 3:
            console.log(`${num1} * ${num2} = ${num1 * num2}`);
            break;

        case 4:
            console.log(`${num1} / ${num2} = ${num1 / num2}`);
            break;

        default:
            break;
    }
}

console.log("Menu: ");
console.log("(1) - Soma");
console.log("(2) - Subtração");
console.log("(3) - Multiplicação");
console.log("(4) - Divisão");

calculadora(8, 4); //padrão +
calculadora(8, 4, 2);
calculadora(8, 4, 3);
calculadora(8, 4, 4);

/* 3.Crie uma função chamada contagemRegressiva que aceite um parâmetro inicio para
 iniciar a contagem regressiva. A função deve exibir no console uma contagem
 regressiva a partir do número fornecido até 1, utilizando um valor padrão de início
 igual a 10.*/

function contagemRegressiva(inicio = 10) {
    for (let i = inicio; i >= 1; i--) {
        console.log(i);
        //criando inicialmente sem especificar o tempo entre um número e outro
    }
}

contagemRegressiva(); //padrão
contagemRegressiva(20)

//_________________parte 2_________________________________

/*1.Escreva uma função chamada apresentacao que aceite três parâmetros: nome,
idade e profissao. A função deve exibir no console uma mensagem de apresentação
no formato "Olá, eu sou [nome], tenho [idade] anos e sou [profissao].", utilizando
valores padrão para os parâmetros caso nenhum seja fornecido.*/

function apresentacao(nome="Gabriel", idade="29", profissao="Dev") {
    console.log(`Olá, eu sou ${nome}, tenho ${idade} anos e sou ${profissao}.`);

}

apresentacao(); //padrão
apresentacao("Zé", "33", "Escritor");


/*2.Crie uma função chamada mensagemPersonalizada que receba um parâmetro texto
para uma mensagem e um parâmetro estilo para o estilo da mensagem (por
exemplo, "normal", "negrito", "itálico"), com um valor padrão de estilo sendo
"normal". A função deve exibir no console o texto fornecido com o estilo
especificado.*/

function mensagemPersonalizada(texto,estilo="normal") {
    console.log(`${texto} no estilo ${estilo}`);
}

mensagemPersonalizada("Texto escrito"); //padrão
mensagemPersonalizada("Texto escrito","negrito");
mensagemPersonalizada("Texto escrito","itálico");