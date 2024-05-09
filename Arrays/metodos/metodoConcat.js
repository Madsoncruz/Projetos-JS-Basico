
//
let primeiroNumeros = new Array(1,2,3,4,5);
let segundoNumeros = new Array(6,7,8,9);

let numeros = primeiroNumeros.concat(segundoNumeros);

//verificando os tipos dos arrays
console.log(typeof(primeiroNumeros));
console.log(`primeiro array ${primeiroNumeros}`);

console.log(typeof(segundoNumeros));
console.log(`segundo array: ${segundoNumeros}`);


console.log(typeof(numeros));
console.log(`concatenando array 1 e 2 é: ${numeros}`);

//Colocar em ordem
let numerosPares = [2,4,6];
let numerosImpares = [1, 3,5];
let listaDosNumeros = numerosPares.concat(numerosImpares.sort());
//let listaOrdenada = listaDosNumeros.sort();
console.log(listaDosNumeros);

console.log(`OUTRA FORMAR DE ORDENAR`);
let numerosPares2 = [2,4,6];
let numerosImpares2 = [1, 3,5];
let listaDosNumeros2 = numerosPares2.concat(numerosImpares2);
let listaOrdenada2 = listaDosNumeros.sort();
console.log(listaDosNumeros2);


