const prompt = require('prompt-sync')();


function BemVindo() {
    console.log('----------------------');
    console.log("Bem Vindo à UC BackEnd");
    console.log('----------------------');
    
}

for (let n = 1; n <= 10; n++) {
    BemVindo();
}


//Multiplicação 
function multiplicacao(nr1, nr2) {
    let resultado = nr1 * nr2;
    return resultado;
}

let nr1 = prompt('Escolha um número: ');
let nr2 = prompt('Escolha outro número: ');

let res = multiplicacao(nr1, nr2);
console.log(`O resultado é: ${res}`);


