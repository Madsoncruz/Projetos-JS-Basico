let a = 2+2; // variavel fora

switch (a) { // if (a=3) {console.log('Muito pequeno')}
    
    case 3: // validação
        console.log('Muito pequeno');
        break;
        case 4:
        console.log('Exatamente');
        break;
        case 5:
        console.log('Muito grande');
        break;
    default:
        console.log('Não conheço esse valor');
        break;
}