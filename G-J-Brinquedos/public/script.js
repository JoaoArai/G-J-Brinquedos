async function carregarProdutos() {
  const resposta = await fetch(
    'https://g-j-brinquedos.onrender.com/produtos'
  );

  const produtos = await resposta.json();

  const container = document.querySelector('#produtos');

  produtos.forEach((produto) => {
    container.innerHTML += `
      <div class="card">
        <img src="${produto.imagem}" alt="${produto.nome}">
        <h2>${produto.nome}</h2>
        <span>R$ ${produto.preco}</span>
      </div>
    `;
  });
}

carregarProdutos();
