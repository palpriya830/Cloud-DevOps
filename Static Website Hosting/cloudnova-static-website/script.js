const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
const contactButton = document.getElementById('contactButton');
const contactMessage = document.getElementById('contactMessage');
const year = document.getElementById('year');

year.textContent = new Date().getFullYear();

menuToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});

navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});

contactButton.addEventListener('click', () => {
  contactMessage.textContent = 'Thanks for visiting CloudNova! This is a demo contact interaction.';
});
