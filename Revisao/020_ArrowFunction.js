//Função Nomeada
function saudacao(nome){
    console.log(`Tenha um bom dia ${nome}!`);
}
//Funçaõ Anônima
const suadacaoAnonima = function (nome){
    console.log(`Tenha um bom dia ${nome}!`);
}
//Função Arrow
const suadacaoArrow = (nome)=>{
    console.log(`Tenha um bom dia ${nome}!`);
}

//Função Arrow Function - Soma
const somaArrow = (valor1, valor2) =>{
    console.log(valor1 + valor2);
}
somaArrow(10, 99);