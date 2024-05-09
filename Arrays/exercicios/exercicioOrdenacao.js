//Colocar em ordem
let numerosPares = [2,4,6];
let numerosImpares = [1, 3,5];
let listaDosNumeros = numerosPares.concat(numerosImpares);
let listaOrdenada = listaDosNumeros.sort();
console.log(listaDosNumeros);

console.log(`OUTRA FORMAR DE ORDENAR`);

let numerosPares2 = [2,4,6];
let numerosImpares2 = [1, 3,5];
let listaDosNumeros2 = numerosPares2.concat(numerosImpares2);
console.log(`${listaDosNumeros2.sort()}`);

console.log(`${numerosImpares2.concat(numerosImpares2).sort()}`);//so mostra os valores, mas nao armazena 