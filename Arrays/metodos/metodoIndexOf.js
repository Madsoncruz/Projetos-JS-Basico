
let arrayLetra = ['a', 'a', 'c','d','b', 'a', 'b'];
const letraInformada = 'b';

console.log(arrayLetra.indexOf(letraInformada));
//console.log(arrayLetra.indexOf('a')); //INFORMA A POSICAO DO PRIMEIRO ELEMENTO DO ARREY

//localizar e exibir todos os índices das ocorrências de um elemento.

for (let index = 0; index < arrayLetra.length; index++) {
    if (arrayLetra[index]=== letraInformada){
            console.log(`O elemento ${letraInformada} foi localizado no índice: ${index}`);

    }
        console.log(`Letra diagitada não foi encontrada`)
    }
    




//console.log(arrayLetra.indexOf('f')); //QUANDO NAO ENCONTRA MOSTRA -1.