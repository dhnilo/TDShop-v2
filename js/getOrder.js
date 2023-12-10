function getOrder() {
  // Get the orderID from the URL
  const urlParams = new URLSearchParams(window.location.search);
  const orderID = urlParams.get("orderID");

  // Select the container
  const container = document.querySelector("#orderContainer");

  // Send a GET request to getOrder.php
  fetch(`php/getOrders.php?orderID=${orderID}`)
    .then((response) => response.json())
    .then((data) => {
      // Handle the response data

      // Display the order ID
      const titleElement = document.querySelector(".title");
      titleElement.textContent += `Your Order ID: ${data.orderID}`;

      // Parse the cart and shippingInfo JSON strings back into objects
      if (typeof data.cart === "string") {
        data.cart = JSON.parse(JSON.parse(data.cart));
      }
      if (typeof data.shippingInfo === "string") {
        data.shippingInfo = JSON.parse(JSON.parse(data.shippingInfo));
      }

      var totalItemPrice = 0;
      var shippingPrice = 10;

      // Display the order items
      const orderTable = document.querySelector("#orderTable tbody");
      data.cart.forEach((item) => {
        totalItemPrice += item.price * item.qty;
        const row = document.createElement("tr");
        row.innerHTML = `
              <td><img src="${item.image}" width="100px"></td>
              <td>${item.name}</td>
              <td>$${item.price}</td>
              <td>${item.qty}</td>
          `;
        orderTable.appendChild(row);
      });

      console.log("Order data:", data);

      // Display the shipping info
      const shippingElement = document.querySelector("#shipping");
      shippingElement.textContent = `Shipping: ${data.shippingInfo.address}, ${data.shippingInfo.city}, ${data.shippingInfo.postalCode}, ${data.shippingInfo.country}`;

      // Display the item subtotal
      const itemSubtotalElement = document.querySelector("#itemSubtotal");
      itemSubtotalElement.textContent = `Item Subtotal: $${totalItemPrice.toFixed(2)}`;

      // Calculate and display the tax
      const taxRate = 0.1; // Update this to your actual tax rate
      const taxPrice = totalItemPrice * taxRate;
      const itemTaxElement = document.querySelector("#itemTax");
      itemTaxElement.textContent = `Tax: $${taxPrice.toFixed(2)}`;

      // Display the shipping price in the order summary
      const shippingPriceElement = document.querySelector("#shippingPrice");
      if (totalItemPrice > 100) {
        shippingPrice = 0;
      } else {
        shippingPrice = 10;
      }
      shippingPriceElement.textContent = `Shipping Price: $${shippingPrice.toFixed(2)}`;

      // Calculate and display the total
      const totalPrice = totalItemPrice + taxPrice + shippingPrice;
      const totalElement = document.querySelector("#total");
      totalElement.textContent = `Total: $${totalPrice.toFixed(2)}`;

      if (data.isPaid) {
        // Display the payment status
        const paymentStatusElement = document.querySelector("#paymentStatus");
        paymentStatusElement.textContent = `Payment Status: Paid`;
      } else {
        paypal.Buttons({
          createOrder: function (data, actions) {
              // This function sets up the details of the transaction, including the amount and line item details.
              return actions.order.create({
                  purchase_units: [{
                      amount: {
                          value: totalPrice.toFixed(2)
                      }
                  }]
              });
          },
          onApprove: function (data, actions) {
              // This function captures the funds from the transaction.
              return actions.order.capture().then(function (details) {
                  // This function shows a transaction success message to your buyer.
                  alert('Transaction completed by ' + details.payer.name.given_name);
  
              });
          }
      }).render('#paypal-button-container');
      }
    });
}
