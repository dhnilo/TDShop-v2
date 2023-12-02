document.getElementById('login-form').addEventListener('submit', function(event) {
  event.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  fetch('php/login.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email: email, password: password }) // Send the plain text password
  })
  .then(response => response.json())
  .then(data => {
    if (data.success) {
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('userId', data.userId);
      window.location.href = 'homeScreen.html';
    } else {
      alert('Invalid email or password');
    }
  });
});