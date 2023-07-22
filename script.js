const menu = document.getElementById('menu');
const menuItems = document.getElementById('menu-items');

menu.addEventListener('click', () => {
  menuItems.classList.toggle('navbar-mobile-show');
});
