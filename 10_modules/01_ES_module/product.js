const products = [
    { id: 1, name: "Laptop", price: 999 },
    { id: 2, name: "Smartphone", price: 599 },
    { id: 3, name: "Tablet", price: 399 },
  ];
  
  // Exported functions to interact with products
  export function getProductById(id) {
    return products.find(product => product.id === id);
  }
  
  export function getAllProducts() {
    return products;
  }
  
  export function addProduct(newProduct) {
    // Adds a new product to the array
    products.push(newProduct);
  }