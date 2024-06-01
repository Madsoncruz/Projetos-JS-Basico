function somar() {
    //Recebe os dados dos elementeos HTML e os converte em Float, em seguida, atribui a variável.
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);

    const soma = num1 + num2;
    document.getElementById('resultado').textContent = `A soma dos valores é: ${soma}`;
    document.getElementsByTagName('input')[""];
    
}

function subtrair() {

    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);

    const subtrai = num1 - num2;
    document.getElementById('resultado').textContent = `A soma dos valores é: ${subtrai}`;
    
}

function dividir() {

    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);

    const dividi = num1 / num2;
    document.getElementById('resultado').textContent = `O resultado da operação é: ${dividi}`;
    
}