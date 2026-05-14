const productCatalog = [
  {
    name: "Wireless Headphones",
    description: "Comfortable wireless headphones with clear sound.",
    price: 79.99,
  },
  {
    name: "Smart Watch",
    description: "A simple smart watch for tracking time and activity.",
    price: 129.99,
  },
  {
    name: "Laptop Stand",
    description: "Adjustable stand for better desk posture.",
    price: 39.99,
  },
  {
    name: "Bluetooth Speaker",
    description: "Portable speaker with strong battery life.",
    price: 49.99,
  },
  {
    name: "Desk Lamp",
    description: "Compact LED lamp with adjustable brightness.",
    price: 34.99,
  },
  {
    name: "Mechanical Keyboard",
    description: "Responsive keyboard for typing and productivity.",
    price: 89.99,
  },
  {
    name: "USB-C Hub",
    description: "Multi-port hub for laptops and tablets.",
    price: 44.99,
  },
  {
    name: "Travel Backpack",
    description: "Lightweight backpack with organized storage.",
    price: 59.99,
  },
  {
    name: "Wireless Mouse",
    description: "Ergonomic mouse with smooth tracking.",
    price: 24.99,
  },
  {
    name: "Portable Charger",
    description: "High-capacity battery pack for everyday devices.",
    price: 54.99,
  },
];

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function shuffleProducts(products) {
  return [...products].sort(() => Math.random() - 0.5);
}

function createImageUrl(productName) {
  const imageId = getRandomNumber(1, 100000);
  const productSeed = productName.toLowerCase().replaceAll(" ", "-");

  return `https://picsum.photos/seed/${productSeed}-${imageId}/400/300`;
}

function createProducts() {
  const productCount = getRandomNumber(4, productCatalog.length);

  return shuffleProducts(productCatalog)
    .slice(0, productCount)
    .map((product, index) => ({
      id: index + 1,
      ...product,
      image: createImageUrl(product.name),
    }));
}

module.exports = createProducts();
