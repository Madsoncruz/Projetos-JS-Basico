function soma(valor1, valor2) { //parametro - variavel
    if (valor1 === undefined || valor2 === undefined) { //caso nao informe os parametros.
        console.log('soma () requerer pelo menos dois argumentos');
    }
    else {

        console.log(valor1 + valor2); // o calculo esta sendo feito pelo console que é uma funcao, mas a funcao soma nao esta executando o processo de dados.
    }
   
}
soma(18, 20);//argumento