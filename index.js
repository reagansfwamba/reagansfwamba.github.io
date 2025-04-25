// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navMenu = document.querySelector('.navmenu');

// Add mobile menu button to your header (you'll need to add this HTML)
const header = document.querySelector('header');
header.innerHTML += '<button class="mobile-menu-btn"><i class="ph ph-list"></i></button>';

mobileMenuBtn.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

// Header Scroll Effect
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  header.classList.toggle('scrolled', window.scrollY > 50);
});

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});