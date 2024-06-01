
let letrasMinusculas = new Array ('a', 'b', 'c', 'd');

let letrasMaiusculas = letrasMinusculas.map(function (item) { //item recebe os elementos do array letrasMinusculas
    return item.toUpperCase();

});
console.log(`Antes do uso do Map: ${letrasMinusculas}\n`);
console.log(`Após o uso do Map: ${letrasMaiusculas}`);

/**
 * Exemplo do uso do MAP
 */

let notas = new Array(5.5, 7.5, 6.5, 9.0);
let notasOrdenadas = notas.sort();

notas.map(function (exibir) {
    return notasOrdenadas;
});
  
console.log(`As notas ordenadas são: ${notas}`);
console.log(`Conteudo de notasOrdenadas: ${notasOrdenadas}`);
