const navbar = document.getElementById("navbar");
const openMenu = document.getElementById("open-menu");
const menuMobile = document.getElementById("menu-mobile")

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    navbar.classList.add('scroll');
  } else {
    navbar.classList.remove('scroll');
  }
});

openMenu.addEventListener("click", () => {
  menuMobile.classList.toggle("open")
  openMenu.classList.toggle("open")
})