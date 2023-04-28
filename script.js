// Smooth scrolling effect for navigation links
const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.getAttribute('href');
    const targetPosition = document.querySelector(targetId).offsetTop;
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  });
});

// Toggle mobile menu on small screens
const menuButton = document.querySelector('.menu-button');
const mobileMenu = document.querySelector('nav ul');

menuButton.addEventListener('click', () => {
  mobileMenu.classList.toggle('show-menu');
});

// Form submission
const form = document.querySelector('form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

form.addEventListener('submit', e => {
  e.preventDefault();

  const nameValue = nameInput.value.trim();
  const emailValue = emailInput.value.trim();
  const messageValue = messageInput.value.trim();

  if (nameValue === '' || emailValue === '' || messageValue === '') {
    alert('Please fill out all fields.');
    return;
  }

  // Send the form data to a server using AJAX or fetch
  // and handle the response appropriately.
  console.log('Form submitted:', nameValue, emailValue, messageValue);
});
