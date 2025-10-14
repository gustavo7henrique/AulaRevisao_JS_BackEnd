const funcoesJuros = require('./027_ModuloJuros');

const resultadoJurosSimples = funcoesJuros.juros_simples(800, 5, 12);
    console.log(resultadoJurosSimples);

const resJuroscomposto = funcoesJuros.juros_composto(800, 5, 12);
const {juros, total} = resJuroscomposto;

console.log(`O juros foi de R$${juros} e o total foi de R$${total}`);

    