console.log("order.js loaded");

function placeOrder() {
  console.log("placeOrder() called");
  var thisOrder = localStorage.getItem("orderID");
  console.log(thisOrder);
  newID = parseInt(thisOrder.replace(/\D/g, ""));
  console.log(newID);
  var orderItems = {
    userId: parseInt(localStorage.getItem("userId")),
    orderID: newID,
    cart: JSON.stringify(localStorage.getItem("cart")),
    shippingInfo: JSON.stringify(localStorage.getItem("shippingInfo")),
    isPaid: false,
  };

  var orderFlag = false;

  // Convert the order object to a JSON string
  var orderJson = JSON.stringify(orderItems);

  console.log(orderJson);
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
      if (data.message) {
        orderFlag = true;
        // Clear the cart
        localStorage.removeItem("cart");
        localStorage.removeItem("shippingInfo");
        window.location.href = "orderScreen.html" + "?orderID=" + order.orderID;
      } else if (data.error) {
        orderFlag = false;
        console.error("Error:", data.error);
        alert("Order failed");
      }
    })
  };
