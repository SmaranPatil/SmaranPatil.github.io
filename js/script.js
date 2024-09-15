// JavaScript to toggle the mobile menu
const menuIcon = document.getElementById('menu-icon');
const mobileNav = document.getElementById('mobile-nav');

menuIcon.addEventListener('click', () => {
  mobileNav.classList.toggle('show');
  mobileNav.classList.toggle('hidden');
});
