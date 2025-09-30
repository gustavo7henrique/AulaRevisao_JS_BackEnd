//Criando constante para receber o módulo express
const express = require('express');
//Criando uma aplicação express
const app = express();

//const pgPrincipal = (req, res) => {
//   res.send('Bem-Vindo ao Servidor Node.js com Express!')
//}

//Rota principal
//app.get('/', pgPrincipal);

app.get('/', (req, res) => {
  res.send('<h1>Bem-Vindo à nossa página!</h1>')
})

const produtos = ['Smartphone', 'Notebook', 'Televisão', 'Mouse'];
app.get('/produtos', (req, res) => {
    let html = '<h1>Lista de Produtos:</h1>';
    html += '<ul>'; // html = html + '<ul>'
    for (let produtoEst of produtos) {
        html += `<li>${produtoEst}</li>`
    }
    html += '</ul>'
    res.send(html);
})

app.get('/produto/:id', (req, res) => {
    const id =req.params.id;
    const produtoSel = produtos[id];
    if (produtoSel == undefined) {
        res.send(`Produto não encontrado`);
    } else {
        res.send(`Voê está vizualizando o produto do id: ${id} - seu nome é: ${produtoSel}`);
    }
}) 

app.get('/total/:id_produto/:preco/:qtde', (req, res) => {
    const id_produto = Number(req.params.n1);
    const preco = Number(req.params.preco);
    const qtde = Number(req.params.qtde);

    const resultado = preco * qtde;

    res.send(`O produto de id: ${id_produto}, quantidade: ${qtde} e preco: ${preco} dra um total de ${resultado}`);
})

app.get('/menu', (req, res) => {
    let html = 
    `<h1>Menu</h1>
    <a href="/">📍Principal</a>
    <a href="/produtos">👍🏼Produtos</a>
    <a href="/produto/1">🎶Produto 1</a>
    <a href="/produto/7">🧨Produto não encontrado</a>
    <a href="/total/:id_produto/:preco/:qtde">💡Total</a>
    `;

    res.send(html);
})

const porta = 3000;
app.listen(porta, () => {
    console.log(`Servidor rodando em http://localhost:${porta}`);
})
