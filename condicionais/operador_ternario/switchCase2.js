let a = '1';
let b = 0;


switch (+a) { // Usa === tipo e valor. if (a=b) . Quando coloca o + na frente do a, transforma o conteudo em number.
    
    case b + 1:
        console.log('Isso funciona, porque +a é 1, exatamente = b + 1.')
        break;

    default:
        console.log('Iso não funciona.')
        break;
}