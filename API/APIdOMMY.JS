//É UMA CONSTANTE QUE RECEBERA UMA STRING DO RECURSO QUE DESEJA-SE CONSUMIR.

const { errorMonitor } = require('events');

const URL = 'https://dummyjson.com/products/1'
const RESPOSTA = 'library'; // LOCAL ONDE SERÁ GRAVADO O ARQUIVO JSON

/**
 * Função para gravar os dados retornados pela API em um arquivo físico.
 */
async function gravarEmArquivo(resp) { // resp pode ser qualquer nome.
    const fs = require('fs');    //IMPORTAR O MODULO 'FS' PARA MANIPULAR O ARQUIVO (Informar que essa funcao irá utilizar uma biblioteca para processar os dados. O fs é o nome da biblioteca importada)
    const diretorio = RESPOSTA; // Define o local onde será armazenado o arquivo.
    const arquivo =`${diretorio}/resposta.json`; //Define o nome do arquivo.


    try {
        const dadosJSON = JSON.stringify(resp, null, 2);  // CONVERTE O OBJETO PARA JSON FORMATADO ( 2 CAMPOS, 1 SERA A RESPOSTA(id) E OUTRO É NULL(dado), PQ N SEI QUAL SERÁ OS DADOOS
        await fs.promises.writeFile(arquivo, dadosJSON); //ESCREVER OS DADOS NO ARQUIVO "RESPOSTA.JSON"
        console.log('Dados gravados com sucesso no arquivo resposta.json'); //não é obrigatorio, apenas para testar.

    } catch (error) {
        console.error('Erro ao gravar os dados no arquivo: ', error.message);
        
    }
    
}


async function chamarAPI() {
    let resp = await fetch(URL);//requisicao
    //console.log(resp);//Testar qual a resposta do servidor da API.

    //preparar o prgrama para receber os dados da API
    if (resp.status === 200) { // se a promessa for com status 200, iremos aguardar a entrega pela API, que será armazenado no arquivo resp.json.
        const obj = await resp.json();// Converter o resultado que foi enviado como resposta pelo servidor da API em um objeto.json (arquivo temporario)
        console.log(obj); //exibindo o arquivo JSON
        await gravarEmArquivo(obj); //chama a fucao de gravar

    }

}
chamarAPI();