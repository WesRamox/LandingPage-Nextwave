const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    navbar.classList.add('scroll');
  } else {
    navbar.classList.remove('scroll');
  }
});