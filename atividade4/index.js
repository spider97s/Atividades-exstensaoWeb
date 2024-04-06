const express = require('express');
const calculadora = require('./util/calculadora');

const app = express();
const PORT = 3000;

// soma
app.get('/somar/:a/:b', (req, res) => {
    const resultado = calculadora.somar(parseInt(req.params.a), parseInt(req.params.b));
    res.send(`A soma de ${req.params.a} e ${req.params.b} eh: ${resultado}`);
});

// subtrair
app.get('/subtrair/:a/:b', (req, res) => {
    const resultado = calculadora.subtrair(parseInt(req.params.a), parseInt(req.params.b));
    res.send(`A subtracao de ${req.params.a} por ${req.params.b} eh: ${resultado}`);
});

// multiplicacao
app.get('/multiplicar/:a/:b', (req, res) => {
    const resultado = calculadora.multiplicar(parseInt(req.params.a), parseInt(req.params.b));
    res.send(`A multiplicação de ${req.params.a} e ${req.params.b} eh: ${resultado}`);
});

// dividir
app.get('/dividir/:a/:b', (req, res) => {
    const resultado = calculadora.dividir(parseInt(req.params.a), parseInt(req.params.b));
    res.send(`A divisao de ${req.params.a} por ${req.params.b} eh: ${resultado}`);
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
