function logout() {
  localStorage.setItem("isLoggedIn", "false");
  localStorage.removeItem("userId");
  localStorage.removeItem("orderID");
  localStorage.removeItem("shippingAddress");
  localStorage.removeItem("cart");
  window.location.href = "homeScreen.html";
}