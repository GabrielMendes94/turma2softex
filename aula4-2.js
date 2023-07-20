//Estrutura de decisão IF-ELSE e ELSE-IF
var num = -11;
if (num>=0){
    console.log("O número é positivo");
}else{
    console.log("ERRO");
}

if (num%2==0) {
    console.log("O número é par");
}else{
    console.log("O número é ímpar");
}

var nome="algo";
if(nome===""){
    console.log("String vazia");
}else{
    console.log(nome);
}

if (num>10) {
    console.log("Maior que 10");
}else{
    num*=2;
    console.log(num);
}

var variavel="";
if(typeof  variavel === "boolean") {
    console.log("É booleano");
}else{
    variavel=false
    console.log(variavel);
}

//ELSE IF
var num = -11;
if (num>0){
    console.log("O número é positivo");
}else if(){
    console.log("O número é negativo");
}else{
    console.log("O número é 0");
}

if (num%2==0)||(num%3==0)||(num%5==0)||(num%7==0){
    console.log("O número é divisível por 2, 3, 5 ou 7");
}

var variavel="";
if(typeof  variavel === "boolean") {
    console.log("É booleano");
}else if (typeof variavel === "number"){
    console.log("É numérica");
}else if (typeof variavel === "string"){
    console.log("É string");
}else if (typeof variavel === "undefined"){
    console.log("É indefinida");
}






//npm install readline-sync
/*const readline = require("reeadline-sync")
var nome = readline.question("Digite o seu nome");
console.log("O nome digitado foi ",nome);*/
