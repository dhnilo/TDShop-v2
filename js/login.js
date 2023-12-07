document
  .getElementById("login-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    fetch("php/login.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email, password: password }), // Send the plain text password
    })
    .then((response) => {
      console.log("Raw response:", response);
      return response.json(); // Convert the response to JSON
    })
    .then((data) => {
      console.log('Data:', data);
      if (data.success) {
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("userId", parseInt(data.userId));
        console.log("User ID:", data.userId);
        window.location.href = "homeScreen.html";
      } else {
        alert("Invalid email or password");
      }
    })
    .catch((error) => console.error('Error:', error));
  });
