
let letrasMinusculas = new Array ('a', 'b', 'c', 'd');

let letrasMaiusculas = letrasMinusculas.map(function (item) { //item recebe os elementos do array letrasMinusculas
    return item.toUpperCase();

});
console.log(`Antes do uso do Map: ${letrasMinusculas}\n`);
console.log(`Após o uso do Map: ${letrasMaiusculas}`);
