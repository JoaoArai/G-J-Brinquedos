let produtosAtuais = [];

async function carregarProdutos(categoria = "") {
  try {
    const resposta = await fetch(
      `https://g-j-brinquedos.onrender.com/produtos?categoria=${categoria}`
    );

    produtosAtuais = await resposta.json();

    renderizarProdutos(produtosAtuais);
  } catch (erro) {
    console.error(erro);

    document.querySelector("#produtos").innerHTML =
      "<h2>Erro ao carregar produtos.</h2>";
  }
}

function renderizarProdutos(produtos) {
  const container = document.querySelector("#produtos");

  container.innerHTML = "";

  produtos.forEach((produto) => {
    container.innerHTML += `
      <article class="product-card">

        <div class="product-image">

          <img
            src="${produto.imagem}"
            alt="${produto.nome}"
          >

        </div>

        <div class="product-info">

          <span class="product-category">
            ${produto.categoria ?? "Brinquedo"}
          </span>

          <h3 class="product-title">
            ${produto.nome}
          </h3>

          <p class="product-description">
            ${produto.descricao ?? "Diversão garantida para toda a família."}
          </p>

          <div class="product-footer">

            <span class="product-price">
              R$ ${Number(produto.preco).toFixed(2).replace(".", ",")}
            </span>

            <button class="buy-button">
              Comprar
            </button>

          </div>

        </div>

      </article>
    `;
  });

  document.querySelector("#totalProdutos").textContent =
    `${produtos.length} produtos`;
}

document.querySelectorAll("[data-category]").forEach((botao) => {
  botao.addEventListener("click", () => {
    const categoria = botao.dataset.category;

    carregarProdutos(categoria);
  });
});

document.querySelector("#ordenacao").addEventListener("change", (event) => {
  const ordenacao = event.target.value;

  const produtosOrdenados = [...produtosAtuais];

  if (ordenacao === "menor") {
    produtosOrdenados.sort((a, b) => Number(a.preco) - Number(b.preco));
  }

  if (ordenacao === "maior") {
    produtosOrdenados.sort((a, b) => Number(b.preco) - Number(a.preco));
  }

  if (ordenacao === "nome") {
    produtosOrdenados.sort((a, b) =>
      a.nome.localeCompare(b.nome)
    );
  }

  renderizarProdutos(produtosOrdenados);
});

carregarProdutos();
