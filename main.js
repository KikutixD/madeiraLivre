import { callCart } from "./src/menuCart";

const catalogo = [
  {
    id: 1,
    nome: "Kit área",
    marca: "Madeira Roberto",
    preco: 5000,
    imagem: "product-1.jpg",
  },
  {
    id: 2,
    nome: "Kit cozinha",
    marca: "Madeira Roberto",
    preco: 6000,
    imagem: "product-2.jpg",
  },
  {
    id: 3,
    nome: "Kit 3",
    marca: "Madeira Roberto",
    preco: 7000,
    imagem: "product-3.jpg",
  },
  {
    id: 4,
    nome: "Kit 4",
    marca: "Madeira Roberto",
    preco: 7060,
    imagem: "product-4.jpg",
  },
];

for (const produtoCatalogo of catalogo) {
  const cartaoProduto = ` <div class="w-80 m-2 border-solid border-2 border-sky-500" id="card-produto-${produtoCatalogo.id}">
    <img
      src="assets/${produtoCatalogo.imagem}"
      alt="Produto ${produtoCatalogo.id} loja Madeiralivre"
      style="height: 300px"
    />
    <p>${produtoCatalogo.marca}</p>
    <p>${produtoCatalogo.nome}</p>
    <p>R$ ${produtoCatalogo.preco}</p>
    <button>Adicionar</button>
  </div>`;

  document.getElementById("containerProduto").innerHTML += cartaoProduto;
}

callCart();
