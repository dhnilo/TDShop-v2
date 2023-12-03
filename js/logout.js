function logout() {
  localStorage.setItem("isLoggedIn", "false");
  localStorage.removeItem("userId");
  localStorage.removeItem("orderId");
  clearCart();
  window.location.href = "homeScreen.html";
}