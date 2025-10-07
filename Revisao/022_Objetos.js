let produto = {
    nome: "Celular",
    preco: 2000,
    marca: "Sansung",
    quebrado: false
}

//Exibindo todos os dados do objeto
console.log(produto);

//Exibindo uma informação dentre todas
console.log(produto.nome); //Celular
console.log(produto.marca); //Sansung
console.log(produto.modelo); //Undefined

console.log(produto['nome']); //Celular

produto.preco = 1900;
console.log(produto);


produto.modelo = 'Galaxy S25';
console.log(produto);


//interando sobre as chaves do objetoutilizando o for

for (let chave in produto){
    console.log(chave);
    console.log(produto[chave]);
}

for (let chave in produto){
    console.log(`Chave: ${chave} seu valor é ${produto[chave]}`);
    
}

//

let aluno = {
    nome: "Gustavo Hnerique",
    sexo: "M",
    idade: 16,
    dados_mae: {
        nome: 'Aliadna',
        telefone: '18 99758-3050'
    },
    boletim: [
        {materia: "Portugues", nota: 10, faltas: 2},
        {materia: "Matematica", nota: 9, faltas: 3}
    ]
}

console.log(aluno);
console.log(aluno.dados_mae.telefone);
console.log(aluno.boletim[1].nota);

