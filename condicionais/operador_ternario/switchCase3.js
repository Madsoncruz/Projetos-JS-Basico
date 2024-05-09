let arg = 0;

switch (arg) {
    case '0':
    case '1':
        console.log('Um ou zero');
        break;

    case '2':
        console.log('Dois');
        break;

    case '3':
        console.log('Nunca executa!');
        break;       

    default:
        console.log('Um valor desconhecido');
        break;
}