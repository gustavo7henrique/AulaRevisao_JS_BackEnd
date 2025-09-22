const prompt = require('prompt-sync')();

//Nome
let nome = prompt('Qual o seu Nome? ');
console.log(`Olá, ${nome}`);

//Idade
let anoNasc = prompt('Em que ano você nasceu? ')
let anoAtual = prompt('Em que ano estamos? ');
let idade =(anoAtual - anoNasc);

//Aniversário
let aniv = prompt('Você já fez aniversário? ');
if (aniv == 's') {
    console.log(`Você tem ${idade} anos`);
} else {
    console.log(`Você ainda tem ${idade -1} anos`);
}

