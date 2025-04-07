const productGrid = document.getElementById("productGrid");
const totalItemsElement = document.getElementById("totalItems");
const totalPriceElement = document.getElementById("totalPrice");
const slideshowElement = document.getElementById("slideshow");

// Liste des produits
const products = [
  { name: "Sac Pratique", price: 1000, image: "./img/sac5.jpg" },
  { name: "Sac soirées", price: 2000, image: "./img/sac2.jpg" },
  { name: "Sac Pratique", price: 5500, image: "./img/sac3.jpg" },
  { name: "Sac soirée", price: 4000, image: "./img/sac9.jpg" },
  { name: "Sac Petit", price: 3000, image: "./img/sac4.jpg" },
  { name: "Sac de soirée", price: 2000, image: "./img/sac1.jpg" },
  { name: "Sac Pratique", price: 5500, image: "./img/11.webp" },
  { name: "Sac soirée", price: 4000, image: "./img/sac10.jpg" },
  { name: "Sac Petit", price: 3000, image: "./img/sac6.jpg" },
  { name: "Sac Pratique", price: 1000, image: "./img/sac7.jpg" },
  { name: "Sac ", price: 10000, image: "./img/11.jpg" },
  { name: "Sac ", price: 10000, image: "./img/16.jpg" },
  { name: "Sac ", price: 10000, image: "./img/15.jpg" },
  { name: "Sac ", price: 10000, image: "./img/14.jpg" },
  { name: "Sac ", price: 10000, image: "./img/13.jpg" },
  { name: "Sac ", price: 10000, image: "./img/31.jpg" },
  { name: "Sac ", price: 10000, image: "./img/30.jpg" },
  { name: "Sac ", price: 10000, image: "./img/sac13.jpg" },
  { name: "Sac ", price: 10000, image: "./img/sac12.jpg" },
  { name: "Sac ", price: 10000, image: "./img/sac11.jpg" },
  { name: "Cartable", price: 9500, image: "./img/sac17.jpg" },
  { name: "Cartable", price: 9500, image: "./img/sac18.jpg" },
  { name: "Cartable", price: 9500, image: "./img/sac19.jpg" },
  { name: "Cartable", price: 9500, image: "./img/19.jpg" },
  { name: "Cartable", price: 9500, image: "./img/18.jpg" },
  { name: "Sac et valises de voyage", price: 10000, image: "./img/20.jpg" },
  { name: "Sac et valises de voyage", price: 10000, image: "./img/21.jpg" },
  { name: "Sac et valises de voyage", price: 10000, image: "./img/22.jpg" },
  { name: "Sac et valises de voyage", price: 10000, image: "./img/33.jpg" },
  { name: "Sac et valises de voyage", price: 10000, image: "./img/32.jpg" },
];

// Variables pour suivre les achats
let totalItems = 0;
let totalPrice = 0;

// Fonction pour afficher les produits
function displayProducts() {
  productGrid.innerHTML = ""; // Efface la grille avant d'ajouter les produits

  products.forEach((product, index) => {
    // Création des éléments HTML pour chaque produit
    const productCard = document.createElement("div") ;
    productCard.classList.add("product-card");

    const productImage = document.createElement("img");
    productImage.src = product.image;
    productImage.alt = product.name;

    const productName = document.createElement("h2");
    productName.textContent = product.name;

    const productPrice = document.createElement("p");
    productPrice.id = 'price-${index}'; // Ajout d'un ID pour mettre à jour le prix
    productPrice.textContent = `${product.price} DH`;

    const buyButton = document.createElement("button");
    buyButton.textContent = " Acheter";
    buyButton.addEventListener("click", () => addToCart(index));

    // Ajout des éléments à la carte produit
    productCard.appendChild(productImage);
    productCard.appendChild(productName);
    productCard.appendChild(productPrice);
    productCard.appendChild(buyButton);

    // Ajout de la carte produit à la grille
    productGrid.appendChild(productCard);
  });
}

// Fonction pour ajouter un produit au panier et augmenter son prix
function addToCart(index) {
  totalItems++;
  totalPrice += products[index].price;

  // Augmentation du prix de 10%
  products[index].price = Math.round(products[index].price * 1.1);

  // Mise à jour du prix affiché
  document.getElementById('price-${index}').textContent = '${products[index].price} DH';

  // Mise à jour du nombre d'articles et du prix total
  totalItemsElement.textContent = totalItems;
  totalPriceElement.textContent = totalPrice + " DH";
}

// Fonction pour afficher une page spécifique
function showPage(pageId) {
  document.querySelectorAll('.page').forEach(page => page.classList.add('hidden'));
  document.getElementById(pageId).classList.remove('hidden');
}

// Diaporama avec images miniatures
const slideshowImages = [
  "./img/b.jpg",
  "./img/a.jpg",
  "./img/c.jpg",
  "./img/d.jpg",
  "./img/l.jpg",
  "./img/e.jpg",
  "./img/f.jpg",
  "./img/g.jpg",
  "./img/h.jpg"
];
let currentImageIndex = 0;

function updateSlideshow() {
  currentImageIndex = (currentImageIndex + 1) % slideshowImages.length;
  slideshowElement.src = slideshowImages[currentImageIndex];
}

setInterval(updateSlideshow, 3000); // Changer l'image toutes les 3 secondes

// Initialisation au chargement de la page
document.addEventListener("DOMContentLoaded", () => {
  displayProducts();
  showPage('homePage');
});