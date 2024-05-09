let idade = 102;

let mensagem = (idade < 3) ? 'oi, oi bebe!' // : se nao
 : (idade < 18) ? 'olá' 
 : (idade < 100) ? 'Saldacao!' 
 : 'Que idade incomum';
console.log(mensagem);