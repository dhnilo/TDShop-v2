function getOrder() {
  // Get the orderID from the URL
  const urlParams = new URLSearchParams(window.location.search);
  const orderID = urlParams.get('orderID');

  // Select the container
  const container = document.querySelector("#orderContainer");

  // Send a GET request to getOrder.php
  fetch(`php/getOrders.php?orderID=${orderID}`)
    .then((response) => response.json())
    .then((data) => {
      // Handle the response data

      // Create HTML elements and set their content to the order data
      const orderIdElement = document.createElement("p");
      orderIdElement.textContent = `Order ID: ${data.orderID}`;

      const userIdElement = document.createElement("p");
      userIdElement.textContent = `User ID: ${data.userId}`;

      // Append the new elements to the container
      container.appendChild(orderIdElement);
      container.appendChild(userIdElement);

      // Parse the cart and shippingInfo JSON strings back into objects
      if (typeof data.cart === 'string') {
        data.cart = JSON.parse(JSON.parse(data.cart));
      }
      if (typeof data.shippingInfo === 'string') {
        data.shippingInfo = JSON.parse(JSON.parse(data.shippingInfo));
      }

      // Loop through the cart array
      data.cart.forEach((item) => {
        // Create HTML elements for each item
        const itemElement = document.createElement("p");
        itemElement.textContent = `Item: ${item.name}, Quantity: ${item.qty}`;

        // Append the new element to the container
        container.appendChild(itemElement);
      });

      // Display the order items
      const orderTable = document.querySelector('#orderTable tbody');
      data.cart.forEach(item => {
          const row = document.createElement('tr');
          row.innerHTML = `
              <td>${item.name}</td>
              <td>${item.price}</td>
              <td>${item.qty}</td>
          `;
          orderTable.appendChild(row);
      });

      console.log("Order data:", data);
    });
}
