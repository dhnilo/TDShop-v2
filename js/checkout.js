function checkLogin() {
  if (localStorage.getItem('isLoggedIn') === 'true') {
    // Continue with the order
    return;
  } else {
    alert('Please log in to continue with your order');
    window.location.href('login.html');
  }
}