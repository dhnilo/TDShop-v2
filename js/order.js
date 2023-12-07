function placeOrder() {
  var thisOrder = localStorage.getItem("orderID"),
  orderID = parseInt(thisOrder.replace(/\D/g, ''));
  var order = {
    userId: parseInt(localStorage.getItem("userId")),
    orderID: orderID,
    cart: JSON.parse(localStorage.getItem("cart")),
    shippingInfo: JSON.parse(localStorage.getItem("shippingInfo")),
    isPaid: false,
  };

  // Convert the order object to a JSON string
  var orderJson = JSON.stringify(order);

  var orderFlag = false;

  // Send a POST request to the server-side script
  fetch("php/order.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: orderJson,
  })
    .then((response) => response.json())
    .then((data) => {
      // Handle the response from the server
      console.log("Order created:", data);
      orderFlag = true;
    })
    .catch((error) => {
      console.error("Error:", error);
      orderFlag = false;
    });

  if (orderFlag) {
    // Clear the cart
    localStorage.removeItem("cart");
    localStorage.removeItem("shippingInfo");

    // Redirect to the order screen
    window.location.href = "orderScreen.html" + "?orderID=" + order.orderID;
  } else {
    alert("Error placing order");
    location.reload();
  }
}
