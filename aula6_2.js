//ARRAYS
//EXERCÍCIOS 2

//Q1
const array1 = [1,2,3,4,5];
const array2 = [1,2,3,4,5];
let array3 = array1.concat(array2);

console.log(array3.length);
console.log(array3);

//Q2
const numeros = [1,2,3,4,5,6,7,8,9,10];
let pares = numeros.filter(x => x%2==0);
console.log(pares);

//Q3
const numeros2 = [3,1,4,1,5,9,2,6,5,3,5];

let numeros2Asc = numeros2.sort(function(a, b) {
    return a - b;
});

console.log(numeros2Asc);

//Q4
const frutas = ['maçã','banana','laranja','uva','manga'];
console.log(frutas.indexOf('laranja'));

//Q5
const parametro = [1,2];
function ehArray(params) {
    if(params.isArray()){
        return true
    }else{
        return false
    }
}

console.log(ehArray(parametro));

