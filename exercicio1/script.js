const num = +prompt('Qual o número:')

// IF DENTRO De OUTRO IF
if(num %2 == 0){
    if(num %3 == 0){
        console.log("Número divisível por 2 e por 3");
    }  else{
        console.log("Número apenas por 2")
    }  
}   else if(num %3 == 0){
    console.log("Número divisível apenas por 3")
}   else{
    console.log("Número não é divisível por 2 e nem por 3")
}

// UTILIZANDO OPERADOR CONDICIONAL
if(num %2 === 0 && num %3 === 0){
    console.log('Número é divísível por 2 e por 3')
}   else{
    console.log('Número não é divisível por 2 e por 3')
}
