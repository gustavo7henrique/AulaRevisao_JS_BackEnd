const prompt = require('prompt-sync')();

let cliente = "Gustavo";
console.log(`Seja bem vindo ${cliente}`);

cliente = "Fulano";
console.log(`Seja bem vindo ${cliente}`);

cliente = "Ciclano";
console.log(`Seja bem vindo ${cliente}`);

//Separação no terminal
console.log('--------------------------');

//Função
function clientes(nome) {
    console.log(`Seja Bem Vindo ${nome}`);
}
clientes(`Fulano`);
clientes(`Ciclano`);
clientes(`Beltrano`);