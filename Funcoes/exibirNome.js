function exibirNome() {
    let nome = prompt('Informe o seu nome:');

while (nome === '') {
    alert('Você deve informar seu nome!');
    nome = prompt('Informe o seu nome');
}

    alert(' Olá, ' + nome);

}

exibirNome();