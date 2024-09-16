// JavaScript to toggle the mobile menu
const menuIcon = document.getElementById('menu-icon');
const mobileNav = document.getElementById('mobile-nav');

menuIcon.addEventListener('click', () => {
  mobileNav.classList.toggle('show');
  mobileNav.classList.toggle('hidden');
});


document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".toggle-btn");
  
  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const section = document.querySelector(`.project[data-section="${button.dataset.section}"]`);
      
      // Toggle the 'expanded' class to show/hide content
      section.classList.toggle("expanded");

      // Optionally change button text to show/hide
      if (section.classList.contains("expanded")) {
        button.textContent = `Hide ${button.textContent.split(" ")[1]}`;
      } else {
        button.textContent = `Show ${button.textContent.split(" ")[1]}`;
      }
    });
  });
});
