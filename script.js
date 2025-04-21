
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way
  
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var loginMessage = document.getElementById('loginMessage');
  
    // Simulate login logic
    if(email === "user@example.com" && password === "password") {
      loginMessage.style.color = 'green';
      loginMessage.textContent = 'Login successful!';
    } else {
      loginMessage.style.color = 'red';
      loginMessage.textContent = 'Invalid email or password.';
    }
  });