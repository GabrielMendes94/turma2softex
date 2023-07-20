//1
var minhaVar;

//2
minhaVar = 10;

//3
var soma = 15+18;

//4
soma += 1;

//5
soma *= 3;

//6
console.log("soma =",soma);

//7
var fazSol = true;

//8
var comida = ['arroz','feijão','ovo'];

//9
console.log(comida[1]);

//10
if (soma===minhaVar) {
    console.log("soma(",soma,")=",minhaVar);
}else{
    console.log("soma(",soma,") é diferente de minhaVar(",minhaVar,")");
}

//11
if (minhaVar<=soma) {
    console.log(minhaVar,"<=",soma,":",true);
} else {
    console.log(minhaVar,"<=",soma,":",false);
}

//12
function divisao(n1,n2) {
    return n1/n2;
}

//13
divisao (10,2);