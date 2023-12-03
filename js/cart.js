function addToCart(item) {
  // Get the cart from local storage
  var cart = JSON.parse(localStorage.getItem('cart')) || [];

  // Check if the item is already in the cart
  var index = cart.findIndex(cartItem => cartItem.id === item.id);
  if (index !== -1) {
      // If the item is already in the cart, increase the quantity
      cart[index].qty += 1;
  } else {
      // If the item is not in the cart, add it
      cart.push(item);
  }

  // Save the cart back to local storage
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