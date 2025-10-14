let funcionario = {
    nome: "Reinaldo",
    salario: 5000,
    idade: 40,
    setor: 'RH'
}

//Atrinuindo à variáveis os valores das propriedades do objeto 
//let salario = funcionario.salario * 1.1;
//let nome = funcionario.nome;


//Desestruturando o Objeto
//Declarando e atrinuindo os valores automaticamente do objeto 
let {salario, nome, idade, setor} = funcionario;
console.log(salario);
console.log(nome);

