document.addEventListener('DOMContentLoaded', function() {
    const aboutSection = document.querySelector('#about');
    
    aboutSection.addEventListener('click', function() {
      alert("You clicked on the About section!");
    });
  });
  document.addEventListener('DOMContentLoaded', function() {
    const fadeInElements = document.querySelectorAll('.fade-in');
    
    function checkVisibility() {
      fadeInElements.forEach(element => {
        const rect = element.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          element.classList.add('fade-in');
        }
      });
    }
  
    window.addEventListener('scroll', checkVisibility);
    checkVisibility();  // Check on initial load
  });
  document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    const responseMessage = document.getElementById('response-message');
  
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Simulate form submission
      setTimeout(function() {
        responseMessage.textContent = "Thank you for your message! I'll get back to you soon.";
        form.reset();
      }, 500);
    });
  });
  // script.js
document.getElementById('login-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form from submitting normally

  var email = document.getElementById('login-email').value;
  var password = document.getElementById('login-password').value;

  if (email === "" || password === "") {
    alert("Please fill in both fields.");
  } else {
    alert("Login successful!");
    // You can redirect or process the form here
  }
});
// script.js

document.getElementById('show-signup').addEventListener('click', function(event) {
  event.preventDefault();
  document.getElementById('login').style.display = 'none'; // Hide login
  document.getElementById('signup').style.display = 'block'; // Show sign-up
});

document.getElementById('show-login').addEventListener('click', function(event) {
  event.preventDefault();
  document.getElementById('signup').style.display = 'none'; // Hide sign-up
  document.getElementById('login').style.display = 'block'; // Show login
});
<script>
    function toggleDarkMode() {
      document.body.classList.toggle("dark-mode");
    }
    </script>