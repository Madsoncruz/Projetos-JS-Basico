//ELEMENTO DE INTERACAO

let frutas = ['Manga','Laranja','Abacaxi','Fruta pão'];

//console.log(typeof(frutas));

//listar cada elemento do array - quando sabe e for pequeno
//console.log(frutas[0]);
//console.log(frutas[1]);
//console.log(frutas[2]);

//INTERACAO ENTRE OS ELEMENTOS DO ARRAY.
for (let index = 0; index < frutas.length; index++) {
    console.log(frutas[index]);
    
}
//LISTAR O ELEMENTO DO INDEX 3 DO ARRAY FRUTAS
console.log(frutas[3]);

//----------------------------------------------------------------
//INTERACAO PROFISSIONAL COM O USO DO forEach
//LISTA TODO ELEMENTO DO ARRAY
console.log()
frutas.forEach(frutas => console.log(frutas) );

//LISTAR OS TIPOS DE CADA ELEMENTO DO ARRAY
frutas.forEach(frutas => console.log(typeof(frutas)));

//LISTAR OS ELEMENTOS DO ARRAY COM SEUS RESPECTIVOS TIPOS
frutas.forEach(frutas => console.log(frutas.toUpperCase(), '<->', typeof(frutas)));
