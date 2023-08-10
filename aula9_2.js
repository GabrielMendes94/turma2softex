function criarMensagemDeSaudacao(nome) {
    const mensagem = `Hello, ${nome}`;
    return mensagem;
}

let mensagemDeSaudacao = criarMensagemDeSaudacao("Ana");

console.log(mensagemDeSaudacao);
console.log(criarMensagemDeSaudacao("Gabriel"));

//Exercícios Funções com retorno

/*1.Crie uma função chamada somar que aceite dois números como parâmetros e
retorne a soma deles.*/

function somar(num1, num2) {
    return (num1 + num2);
}

console.log(somar(2, 3));

/*2.Escreva uma função chamada ehPar que aceite um número como parâmetro e
retorne true se o número for par e false caso contrário. */

function ehPar(num) {
    if (num % 2 == 0) {
        return true
    } else {
        return false
    }
}

console.log(ehPar(2));
console.log(ehPar(3));

/*3.Crie uma função chamada maiorNumero que receba três números como
parâmetros e retorne o maior deles.*/

function maiorNumero(num1, num2, num3) {
    const maior = Math.max(num1, num2, num3);
    return maior;
}

console.log(maiorNumero(7, 9, 1));

/*4.Escreva uma função chamada calcularIMC que receba o peso e a altura de uma
pessoa como parâmetros e retorne o índice de massa corporal (IMC) calculado.*/

function calcularIMC(peso, altura) {
    const imc = peso / (altura * altura);
    return imc;

}

console.log(calcularIMC(58, 1.67));

/*5.Crie uma função chamada contarVogais que aceite uma string como parâmetro e
retorne o número de vogais (a, e, i, o, u) presentes na string. */

function contarVogais(palavra) {

    let totalVogais = 0;
    const vogais = ['a', 'e', 'i', 'o', 'u'];

    for (i = 0; i < palavra.length; i++) {
        if (vogais.indexOf(palavra[i]) != -1) {
            totalVogais++;
        }
    }

    return totalVogais;

}

console.log(contarVogais("gabriel"));

/*6.Escreva uma função chamada celsiusParaFahrenheit que receba uma temperatura
em graus Celsius como parâmetro e retorne o valor equivalente em Fahrenheit. */

function celsiusParaFahrenheit(temperatura) {
    return ((temperatura * 1.8) + 32)
}

console.log(celsiusParaFahrenheit(30));

/*7.Crie uma função chamada gerarSenha que aceite um parâmetro tamanho (número
inteiro) e retorne uma senha aleatória com o tamanho especificado. */

function gerarSenha(tamanho) {

    let senha = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + 'abcdefghijklmnopqrstuvwxyz0123456789@#$';

    for (i = 1; i <= tamanho; i++) {
        let char = Math.floor(Math.random() * str.length + 1);

        senha += str.charAt(char)
    }

    return senha;

}

console.log(gerarSenha(8)); //gerando senha de 8 caracteres