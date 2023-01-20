const productsContainerEl = document.querySelector(".products-container");

const PRODUCTS_URL = "https://fakestoreapi.com/products";

function fetchProducts() {
  fetch(PRODUCTS_URL)
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      renderProducts(productsContainerEl, data);
    });
}

function renderProducts(productContainerEl, productsData) {
  let productsHTML = "";

  for (let product of productsData) {
    productsHTML += ` 
    <div class="product-card">
     <h3>${product.id} ${product.title}</h3>
     <h4>${product.price}$</h4>
     <img src=${product.image}  />
     <p>${product.description}</p>
    </div>`;
  }

  productContainerEl.innerHTML = productsHTML;
}

fetchProducts();
