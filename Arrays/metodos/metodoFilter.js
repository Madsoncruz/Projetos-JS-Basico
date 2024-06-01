
let letraValor = ['a', 10 , 'b', 9 , 'c' , 8 , 'd' , 7];

let valor = letraValor.filter(function (params) {
    return typeof params === 'string';

});
console.log(`Os valores das letras são: ${valor}`);