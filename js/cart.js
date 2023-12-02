// Add an item to the cart
function addToCart(item) {
  // Get the cart from localStorage
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  // Add the item to the cart
  cart.push(item);

  // Store the cart in localStorage
  localStorage.setItem('cart', JSON.stringify(cart));
}

// Get the cart
function getCart() {
  // Get the cart from localStorage
  return JSON.parse(localStorage.getItem('cart')) || [];
}

// Clear the cart
function clearCart() {
  // Remove the cart from localStorage
  localStorage.removeItem('cart');
}