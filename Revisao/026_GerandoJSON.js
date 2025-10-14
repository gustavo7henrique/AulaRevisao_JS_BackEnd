//Importando o modulo 'fs' para ler arquivos 
const fs = require('fs');

const pessoa = {
    nome: "Gustavo Hnerique",
    idade: 16,
    hobbies: ["Tocar Trompete", "Programar", "Ficar em Casa"]
}

//Convertendo um objeto JavaScript para JSON
const json = JSON.stringify(pessoa);

//Gravando o arquivo JSON
fs.writeFileSync('./026.json', json);