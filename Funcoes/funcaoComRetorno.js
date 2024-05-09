// FUNCAO SOMA SEM RETORNO
function somaSemRetorno (valor1, valor2) {
    console.log(valor1 + valor2) // NAO EXECUTA O CALCULO MATEMATICO
}
somaSemRetorno(20, 25)

//FUNCAO COM RETORNO
function somaComRetorno(valor1, valor2) {
    let resultado = valor1 + valor2;
    return resultado; // QUANDO PRECISO DO RESULTADO DO PROCESSAMENTO USO O RETURN
}
console.log(somaComRetorno(30, 45));

// FUNCAO SOMA COM RETORNO
function somaComRetorno2 (valor1, valor2) {
    return valor1 + valor2 // NAO EXECUTA O CALCULO MATEMATICO
}
let total = somaComRetorno2(10, 10);
console.log(total);