document.getElementById('register-form').addEventListener('submit', function(event) {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirm-password').value;

  fetch('php/register.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name: name, email: email, password: password })
  })
  .then(response => response.json())
  .then(data => {
    if (data.success) {
      // The registration was successful
      window.location.href = 'loginScreen.html';
    } else {
      // The registration was unsuccessful
      alert(data.message);
    }
  });
});