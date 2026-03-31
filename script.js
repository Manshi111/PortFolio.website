const reveals = document.querySelectorAll(".reveal");

// Scroll Animation
function revealOnScroll() {
  const windowHeight = window.innerHeight;
  reveals.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    if (elementTop < windowHeight - 100) {
      element.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// --- Dark / Light Mode Logic ---
const themeBtn = document.getElementById('theme-toggle');
const body = document.body;
const icon = themeBtn.querySelector('i');

// Check for saved theme preference or default to dark
if (localStorage.getItem('theme') === 'light') {
  body.classList.add('light-mode');
  icon.classList.remove('fa-sun');
  icon.classList.add('fa-moon');
}

themeBtn.addEventListener('click', () => {
  body.classList.toggle('light-mode');
  
  let theme = 'dark';
  if (body.classList.contains('light-mode')) {
    theme = 'light';
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
  } else {
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
  }
  
  localStorage.setItem('theme', theme);
});