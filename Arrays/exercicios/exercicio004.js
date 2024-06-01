let arrayLetra = ['a', 'b', 'c', 'd','a','d','c','a'];

let acharLetra = prompt('Informe a letra que deseja encontrar:');



for (let index = 0; index < arrayLetra.length; index++) {

  if (arrayLetra[index] === acharLetra) {
        console.log(`Encontrou a letra: ${acharLetra} no índice ${index}`);

    } else if (acharLetra !== arrayLetra[index] && arrayLetra.indexOf(acharLetra) === -1){
        console.log(`Não encontrou a letra ${acharLetra}`);
        break;
    }
        

}
