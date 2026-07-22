const express = require('express');

const app = express();

app.use(express.static(__dirname));

const produtos = [
  {
    id: 1,
    nome: 'Mouse Gamer',
    preco: 199.9,
    imagem: 'https://picsum.photos/300?1',
  },
  {
    id: 2,
    nome: 'Teclado Mecânico',
    preco: 299.9,
    imagem: 'https://picsum.photos/300?2',
  },
  {
    id: 3,
    nome: 'Monitor Gamer',
    preco: 999.9,
    imagem: 'https://picsum.photos/300?3',
  },
];

app.get('/produtos', (req, res) => {
  res.json(produtos);
});

app.listen(3000, () => {
  console.log('Servidor rodando!');
});
