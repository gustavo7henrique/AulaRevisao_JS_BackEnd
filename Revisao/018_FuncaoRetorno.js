function calcularComissao(valor, percComissao){
    let valorComissao = valor * (percComissao/100);
    return valorComissao
    let teste = "teste";
}

let comissaoRetornada = calcularComissao(1500, 10);
console.log(comissaoRetornada);

let salario = 3000;
salario = salario + comissaoRetornada;
console.log(`O salário final é de R$${salario}`);


