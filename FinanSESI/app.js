const express = require('express');
const ejs = require('ejs');
const expressLayouts = require('express-ejs-layouts')

const app = express();

//Configurando o motor de vizualização EJS
app.set('view engine', 'ejs');

//Configurando a pasta paar os arquivos estáticos
app.use(express.static('public'));

//Receber informações do formulário
app.use(express.urlencoded({extended:true}));

//Definindo o layout padrão da nosa página
app.use(expressLayouts);
app.set('layout', 'layouts/principal');


//Rota principal do site
app.get('/', (req, res) => {
    //Buscando o arquivo index.js na pasta views
    res.render('index');
});

//Página Sobre
app.get('/sobre', (req, res) => {
    res.render('sobre');
});
//Juros simples
app.get('/jurosSimples', (req, res) => {
    res.render('jurosSimples');
});

//Calcular Juros Simples
app.post('/jurosSimples', (req, res) => {
    const capital = Number(req.body.capital);
    const taxa = Number(req.body.taxa);
    const tempo = Number(req.body.tempo);
    const juros = (capital * taxa * tempo) / 100;
    const total = capital + juros;

    res.render('jurosSimples', {capital, taxa, tempo, juros, total});
});

//Juros Compostos
app.get('/jurosCompostos', (req, res) => {
    res.render('jurosCompostos');
});

//Calcular Juros Compostos
app.post('/jurosCompostos', (req, res) => {
    const capital = Number(req.body.capital);
    const taxa = Number(req.body.taxa);
    const tempo = Number(req.body.tempo);
    const juros = (capital * (1 + (taxa / 100)) ** tempo).toFixed(2);
    const total = juros;

    res.render('jurosCompostos', {capital, taxa, tempo, juros, total});
});


const porta = 3000;
app.listen(porta, () => {
    console.log(`Servidor http://localhost:${porta}`);
});