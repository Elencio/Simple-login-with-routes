// Select Login Form
const form = document.getElementById('form');

// Add Event Listener
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    if (email === 'elencio@gmail.com' && password === 'password123') {
      window.location.href = 'dashboard.html'; // Redirect to dashboard page
    } else {
      alert('Invalid email or password');
    }
    
});

// Helper Function to Validate Email & Password
function isValid(email, password) {
    return email.includes('@gmail.com') && password.length >= 6;
}
