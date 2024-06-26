const express = require('express');
const app = express();

let estoque = [];

app.get('/adicionar/:id/:nome/:qtd', (req, res) => {
    const { id, nome, qtd } = req.params;
    estoque.push({ id, nome, qtd: parseInt(qtd) });
    res.send('Produto adicionado !');
});

app.get('/listar', (req, res) => {
    res.json(estoque);
});

app.get('/remover/:id', (req, res) => {
    const { id } = req.params;
    estoque = estoque.filter(produto => produto.id !== id);
    res.send('Produto removido !');
});

app.get('/editar/:id/:qtd', (req, res) => {
    const { id, qtd } = req.params;
    const produtoIndex = estoque.findIndex(produto => produto.id === id);
    if (produtoIndex !== -1) {
        estoque[produtoIndex].qtd = parseInt(qtd);
        res.send('Quantidade do produto atualizada !');
    } else {
        res.status(404).send('Produto não encontrado!');
    }
});

app.listen(3000, () => {
    console.log('Servidor iniciado na porta 3000');
});
