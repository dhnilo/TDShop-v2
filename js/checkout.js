function payForItems() {
  if (localStorage.getItem('isLoggedIn') === 'true') {
    // Continue with the order
  } else {
    alert('Please log in to continue with your order');
  }
}