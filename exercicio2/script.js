
// UTILIZANDO SWITCH CASE

const country = (prompt('Qual sua nacionalidade:')).toLowerCase();

switch(country){
    case 'brasileira': 
        console.log('A pessoa é brasileira')
        break;
    case 'argentina':
        console.log('A pessoa é argentina')
        break;
    case 'uruguaia':
        console.log('A pessoa é Uruguaia')
        break;
    case 'chilena':
        console.log('A pessoa é chilena')
        break;
    case 'colombiana':
        console.log('A pessoa é colombiana')
        break;
    default:
        console.log('Nacionalidade não encontrada');
}